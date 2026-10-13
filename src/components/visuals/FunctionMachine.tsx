import React, { useState } from 'react';
import { Play, ArrowRight, ArrowLeft, RefreshCw, Plus, Minus } from 'lucide-react';
import { MathText } from '../common/MathText';

export type OperationType = 'add' | 'subtract' | 'multiply';

interface FunctionMachineProps {
  operationType?: OperationType;
  operand?: number;
  initialInput?: number;
  presetInputs?: number[];
  themeColor?: string;
  allowInverse?: boolean;
}

export const FunctionMachine: React.FC<FunctionMachineProps> = ({
  operationType = 'add',
  operand = 4,
  initialInput = 3,
  presetInputs = [1, 2, 3, 5, 10],
  themeColor = '#7C3AED',
  allowInverse = true,
}) => {
  const [inputValue, setInputValue] = useState<number>(initialInput);
  const [outputValue, setOutputValue] = useState<number>(() => {
    if (operationType === 'add') return initialInput + operand;
    if (operationType === 'subtract') return initialInput - operand;
    return initialInput * operand;
  });
  const [isInverse, setIsInverse] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [machineActive, setMachineActive] = useState<boolean>(false);

  const computeForward = (x: number) => {
    if (operationType === 'add') return x + operand;
    if (operationType === 'subtract') return x - operand;
    return x * operand;
  };

  const computeInverse = (y: number) => {
    if (operationType === 'add') return y - operand;
    if (operationType === 'subtract') return y + operand;
    return y / operand;
  };

  const handleRun = () => {
    setIsProcessing(true);
    setMachineActive(true);

    setTimeout(() => {
      if (!isInverse) {
        setOutputValue(computeForward(inputValue));
      } else {
        setInputValue(computeInverse(outputValue));
      }
      setIsProcessing(false);
      setMachineActive(false);
    }, 400);
  };

  const handleSelectInput = (val: number) => {
    setInputValue(val);
    if (!isInverse) {
      setOutputValue(computeForward(val));
    }
  };

  const handleSelectOutput = (val: number) => {
    setOutputValue(val);
    if (isInverse) {
      setInputValue(computeInverse(val));
    }
  };

  const toggleDirection = () => {
    setIsInverse((prev) => !prev);
  };

  const forwardOpLabel =
    operationType === 'add'
      ? `+ ${operand}`
      : operationType === 'subtract'
      ? `− ${operand}`
      : `× ${operand}`;

  const forwardOpText =
    operationType === 'add'
      ? `Add ${operand}`
      : operationType === 'subtract'
      ? `Subtract ${operand}`
      : `Multiply by ${operand}`;

  const inverseOpLabel =
    operationType === 'add'
      ? `− ${operand}`
      : operationType === 'subtract'
      ? `+ ${operand}`
      : `÷ ${operand}`;

  const inverseOpText =
    operationType === 'add'
      ? `Subtract ${operand}`
      : operationType === 'subtract'
      ? `Add ${operand}`
      : `Divide by ${operand}`;

  const currentOpLabel = isInverse ? inverseOpLabel : forwardOpLabel;
  const currentOpText = isInverse ? inverseOpText : forwardOpText;

  const functionFormula =
    operationType === 'add'
      ? `y = x + ${operand}`
      : operationType === 'subtract'
      ? `y = x - ${operand}`
      : `y = ${operand}x`;

  return (
    <div className="w-full flex flex-col items-center select-none py-1">
      {/* Top Banner */}
      <div className="flex items-center gap-2 mb-2">
        <div className="px-3.5 py-1 rounded-xl bg-white border border-[#CBD5E1] shadow-xs flex items-center gap-2">
          <span className="text-base font-bold text-[#475569]">Rule:</span>
          <span className="text-xl font-black" style={{ color: themeColor }}>
            <MathText>{`$${functionFormula}$`}</MathText>
          </span>
        </div>

        {allowInverse && (
          <button
            onClick={toggleDirection}
            className={`px-3 py-1 rounded-xl font-bold text-sm flex items-center gap-1.5 border transition-all cursor-pointer ${
              isInverse
                ? 'bg-[#EDE9FE] border-[#7C3AED] text-[#6D28D9]'
                : 'bg-white border-[#CBD5E1] text-[#475569] hover:bg-[#F8FAFC]'
            }`}
          >
            <RefreshCw className={`w-4 h-4 ${isInverse ? 'text-[#7C3AED]' : ''}`} />
            <span>{isInverse ? 'Inverse Mode' : 'Forward Mode'}</span>
          </button>
        )}
      </div>

      {/* Main Machine */}
      <div className="w-full max-w-lg bg-white rounded-2xl border-2 border-[#CBD5E1] p-3 shadow-xs flex items-center justify-between gap-2 relative">
        {/* INPUT BOX */}
        <div className="flex flex-col items-center flex-1">
          <span className="text-sm font-bold text-[#0F2042] mb-1">
            Input <span className="font-mono text-[#64748B]">(x)</span>
          </span>

          <div
            className={`w-20 h-16 rounded-xl border-2 flex items-center justify-center text-3xl font-black shadow-inner transition-transform ${
              machineActive && !isInverse ? 'scale-105 border-[#7C3AED] bg-[#F5F3FF]' : 'border-[#94A3B8] bg-[#F8FAFC]'
            }`}
          >
            {inputValue}
          </div>

          {!isInverse && (
            <div className="flex items-center gap-1 mt-1.5">
              <button
                onClick={() => handleSelectInput(inputValue - 1)}
                className="w-7 h-7 rounded-lg bg-[#E2E8F0] flex items-center justify-center font-black active:scale-90"
              >
                <Minus className="w-4 h-4 text-[#0F2042]" />
              </button>
              <button
                onClick={() => handleSelectInput(inputValue + 1)}
                className="w-7 h-7 rounded-lg bg-[#E2E8F0] flex items-center justify-center font-black active:scale-90"
              >
                <Plus className="w-4 h-4 text-[#0F2042]" />
              </button>
            </div>
          )}
        </div>

        {/* ARROW 1 */}
        <div className="flex items-center justify-center">
          {isInverse ? (
            <ArrowLeft className="w-6 h-6 text-[#6D28D9]" />
          ) : (
            <ArrowRight className="w-6 h-6 text-[#7C3AED]" />
          )}
        </div>

        {/* MACHINE CORE */}
        <div
          className={`flex-1 flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all shadow-sm text-white ${
            machineActive ? 'ring-4 ring-[#DDD6FE]' : ''
          }`}
          style={{ backgroundColor: themeColor, borderColor: '#5B21B6' }}
        >
          <div className="text-xs font-bold uppercase tracking-wider opacity-90">
            {isInverse ? 'Inverse' : 'Rule'}
          </div>
          <div className="text-3xl font-black my-0.5 font-mono">
            {currentOpLabel}
          </div>
          <div className="text-xs font-semibold opacity-90">
            {currentOpText}
          </div>
        </div>

        {/* ARROW 2 */}
        <div className="flex items-center justify-center">
          {isInverse ? (
            <ArrowLeft className="w-6 h-6 text-[#6D28D9]" />
          ) : (
            <ArrowRight className="w-6 h-6 text-[#7C3AED]" />
          )}
        </div>

        {/* OUTPUT BOX */}
        <div className="flex flex-col items-center flex-1">
          <span className="text-sm font-bold text-[#0F2042] mb-1">
            Output <span className="font-mono text-[#64748B]">(y)</span>
          </span>

          <div
            className={`w-20 h-16 rounded-xl border-2 flex items-center justify-center text-3xl font-black shadow-inner transition-transform ${
              machineActive && isInverse ? 'scale-105 border-[#7C3AED] bg-[#F5F3FF]' : 'border-[#94A3B8] bg-[#F8FAFC]'
            }`}
          >
            {outputValue}
          </div>

          {isInverse && (
            <div className="flex items-center gap-1 mt-1.5">
              <button
                onClick={() => handleSelectOutput(outputValue - (operationType === 'multiply' ? operand : 1))}
                className="w-7 h-7 rounded-lg bg-[#E2E8F0] flex items-center justify-center font-black active:scale-90"
              >
                <Minus className="w-4 h-4 text-[#0F2042]" />
              </button>
              <button
                onClick={() => handleSelectOutput(outputValue + (operationType === 'multiply' ? operand : 1))}
                className="w-7 h-7 rounded-lg bg-[#E2E8F0] flex items-center justify-center font-black active:scale-90"
              >
                <Plus className="w-4 h-4 text-[#0F2042]" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Preset Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2">
        <span className="text-xs sm:text-sm font-bold text-[#475569]">Test:</span>
        {presetInputs.map((val) => {
          const testVal = isInverse ? computeForward(val) : val;
          const isSelected = isInverse ? outputValue === testVal : inputValue === testVal;

          return (
            <button
              key={val}
              onClick={() => (isInverse ? handleSelectOutput(testVal) : handleSelectInput(testVal))}
              className={`px-3 py-1 rounded-lg font-black text-base border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#7C3AED] text-white border-[#5B21B6] shadow-xs'
                  : 'bg-white text-[#0F2042] border-[#CBD5E1] hover:bg-[#F1F5F9]'
              }`}
            >
              {testVal}
            </button>
          );
        })}

        <button
          onClick={handleRun}
          disabled={isProcessing}
          className="ml-2 px-4 py-1 rounded-lg bg-[#7C3AED] text-white font-bold text-base flex items-center gap-1 shadow-xs active:scale-95 cursor-pointer"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Run</span>
        </button>
      </div>
    </div>
  );
};
