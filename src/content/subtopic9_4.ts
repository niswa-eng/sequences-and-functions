import { Subtopic } from '../types';

export const subtopic9_4: Subtopic = {
  id: '9.4',
  code: '7As.03 & 7As.04',
  number: '9.4',
  title: 'Representing simple functions',
  fullTitle: '9.4 Representing simple functions',
  themeColor: {
    primary: '#7C3AED',
    secondary: '#EDE9FE',
    border: '#C4B5FD',
    badgeBg: '#EDE9FE',
    badgeText: '#6D28D9',
  },
  steps: [
    // 1. Objectives
    {
      id: '9.4-obj',
      stepNumber: 1,
      type: 'objective',
      title: 'Learning Objectives',
      cambridgeCode: '7As.03 & 7As.04',
      keyTerms: ['Function', 'Input x', 'Output y', 'Inverse'],
      sentences: [
        'Understand functions as rules linking an input to exactly one output.',
        'Use function machines, algebraic rules (y = x + c, y = mx), and inverse operations.',
      ],
    },

    // 2. Concept 1: What is a function?
    {
      id: '9.4-c1',
      stepNumber: 2,
      type: 'concept',
      title: 'What is a Function?',
      keyTerms: ['Function', 'Single output'],
      sentences: [
        'A function is a mathematical rule that changes an input into an output.',
        'Each input value produces exactly ONE unique output value.',
      ],
      componentType: 'FunctionMachine',
      componentProps: {
        operationType: 'add',
        operand: 4,
        initialInput: 1,
        presetInputs: [1, 2, 3, 5],
        themeColor: '#7C3AED',
        allowInverse: false,
      },
    },

    // 3. Concept 2: Function machine add 4
    {
      id: '9.4-c2',
      stepNumber: 3,
      type: 'concept',
      title: 'Function Machine: Add 4',
      keyTerms: ['Add 4', 'Rule'],
      sentences: [
        'Input enters the machine, 4 is added, and the output emerges.',
        'Test inputs 1, 2, and 3 to see the outputs.',
      ],
      componentType: 'FunctionMachine',
      componentProps: {
        operationType: 'add',
        operand: 4,
        initialInput: 2,
        presetInputs: [1, 2, 3, 4],
        themeColor: '#7C3AED',
        allowInverse: false,
      },
    },

    // 4. Concept 3: Function machine multiply by 3
    {
      id: '9.4-c3',
      stepNumber: 4,
      type: 'concept',
      title: 'Function Machine: Multiply by 3',
      keyTerms: ['Multiply by 3'],
      sentences: [
        'The operation multiplies every incoming number by 3.',
        'Inputs 2, 5, 10 produce outputs 6, 15, 30.',
      ],
      componentType: 'FunctionMachine',
      componentProps: {
        operationType: 'multiply',
        operand: 3,
        initialInput: 2,
        presetInputs: [2, 5, 10, 12],
        themeColor: '#7C3AED',
        allowInverse: false,
      },
    },

    // 5. Concept 4: Writing functions with letters
    {
      id: '9.4-c4',
      stepNumber: 5,
      type: 'concept',
      title: 'Writing Functions with x and y',
      keyTerms: ['y = x + c', 'y = mx'],
      sentences: [
        'Let x be the input and y be the output.',
        'Rule "add 4" is written y = x + 4. Rule "multiply by 3" is written y = 3x.',
      ],
      componentType: 'MappingTable',
      componentProps: {
        ruleLabel: 'y = 3x',
        rows: [
          { x: 1, y: 3 },
          { x: 2, y: 6 },
          { x: 3, y: 9 },
          { x: 4, y: 12 },
        ],
        themeColor: '#7C3AED',
        initialRows: 2,
      },
    },

    // 6. Concept 5: Mapping table of values
    {
      id: '9.4-c5',
      stepNumber: 6,
      type: 'concept',
      title: 'Table of Values',
      keyTerms: ['Table of values', 'Coordinate pairs'],
      sentences: [
        'A table pairs each input x with its calculated output y.',
        'For y = x + 5, every y is 5 greater than x.',
      ],
      componentType: 'MappingTable',
      componentProps: {
        ruleLabel: 'y = x + 5',
        rows: [
          { x: 0, y: 5 },
          { x: 1, y: 6 },
          { x: 2, y: 7 },
          { x: 3, y: 8 },
        ],
        themeColor: '#7C3AED',
        initialRows: 2,
      },
    },

    // 7. Concept 6: Inverse operations
    {
      id: '9.4-c6',
      stepNumber: 7,
      type: 'concept',
      title: 'Finding the Input (Inverse Operation)',
      keyTerms: ['Inverse', 'Reverse operation'],
      sentences: [
        'To work backwards from output to input, do the inverse operation.',
        'The inverse of add is subtract; the inverse of multiply is divide.',
      ],
      componentType: 'FunctionMachine',
      componentProps: {
        operationType: 'add',
        operand: 8,
        initialInput: 12,
        presetInputs: [10, 12, 15, 20],
        themeColor: '#7C3AED',
        allowInverse: true,
      },
    },

    // 8. Concept 7: Words to functions in real life
    {
      id: '9.4-c7',
      stepNumber: 8,
      type: 'concept',
      title: 'Words to Functions',
      keyTerms: ['Real life', 'Word problem'],
      sentences: [
        '"Each notebook costs $2": cost y = 2x where x is the number of notebooks.',
        '"Sam is 3 years older than Lee": Sam\'s age y = x + 3 where x is Lee\'s age.',
      ],
      componentType: 'MappingTable',
      componentProps: {
        ruleLabel: 'y = 2x \\quad (\\text{Cost of notebooks})',
        rows: [
          { x: 1, y: 2 },
          { x: 2, y: 4 },
          { x: 3, y: 6 },
          { x: 5, y: 10 },
        ],
        themeColor: '#7C3AED',
        initialRows: 2,
      },
    },

    // 9. Concept 8: Single output rule
    {
      id: '9.4-c8',
      stepNumber: 9,
      type: 'concept',
      title: 'One Input, Exactly One Output',
      keyTerms: ['One output only'],
      sentences: [
        'A true function never gives two different outputs for the same input.',
        'If you put in x = 5, there is only one correct answer for y.',
      ],
      componentType: 'FunctionMachine',
      componentProps: {
        operationType: 'multiply',
        operand: 4,
        initialInput: 5,
        presetInputs: [2, 5, 7],
        themeColor: '#7C3AED',
        allowInverse: false,
      },
    },

    // 10. Worked Example 1
    {
      id: '9.4-we1',
      stepNumber: 10,
      type: 'worked-example',
      title: 'Worked Example 1',
      sentences: [
        'A function is given by the formula y = x − 4.',
      ],
      workedExample: {
        problem: 'Find the output y when input x = 10, and find the input x when output y = 15',
        steps: [
          {
            label: 'Part a: Output when x = 10',
            math: 'y = 10 - 4 = 6',
            explanation: 'When input x = 10, output y = 6.',
          },
          {
            label: 'Part b: Input when y = 15 (use inverse)',
            math: '15 = x - 4 \\implies x = 15 + 4 = 19',
            explanation: 'The inverse of subtract 4 is add 4. When y = 15, x = 19.',
          },
        ],
      },
    },

    // 11. Worked Example 2
    {
      id: '9.4-we2',
      stepNumber: 11,
      type: 'worked-example',
      title: 'Worked Example 2',
      sentences: [
        'A table shows inputs x: 1, 2, 3 and outputs y: 4, 8, 12.',
      ],
      workedExample: {
        problem: 'Write down the function connecting x and y in algebraic form',
        steps: [
          {
            label: 'Step 1: Compare each x and y pair',
            math: '1 \\times 4 = 4, \\quad 2 \\times 4 = 8, \\quad 3 \\times 4 = 12',
            explanation: 'Each output y is 4 times the input x.',
          },
          {
            label: 'Step 2: State the function',
            math: 'y = 4x',
            explanation: 'The algebraic rule is y = 4x.',
          },
        ],
      },
    },

    // 12. Common Mistakes
    {
      id: '9.4-mistakes',
      stepNumber: 12,
      type: 'common-mistake',
      title: 'Common Mistakes',
      keyTerms: ['Inverse rule', 'Order of variables'],
      sentences: [
        'Remember to reverse the operation when working backwards from output to input.',
        'Do not swap x and y when writing the formula.',
      ],
      mistakeContent: {
        misconception: 'Using the same operation to go backwards: if y = x + 8 and y = 20, calculating 20 + 8.',
        correction: 'To find the input, use the inverse operation: 20 − 8 = 12.',
        takeaway: 'Multiplication in words: "3 times x" is y = 3x, never "3 + x".',
      },
    },

    // 13. Vocabulary
    {
      id: '9.4-vocab',
      stepNumber: 13,
      type: 'vocabulary',
      title: 'Unit Vocabulary',
      vocabList: [
        { term: 'Function', meaning: 'A rule that takes an input and produces exactly one output.' },
        { term: 'Input (x)', meaning: 'The number put into a function or function machine.' },
        { term: 'Output (y)', meaning: 'The number that comes out after applying the rule.' },
        { term: 'Function machine', meaning: 'A visual model showing an input, an operation box, and an output.' },
        { term: 'Inverse operation', meaning: 'The opposite operation that reverses the effect (add ↔ subtract, multiply ↔ divide).' },
        { term: 'Table of values', meaning: 'A grid listing corresponding input x and output y pairs.' },
        { term: 'Variable', meaning: 'A letter (such as x or y) representing an unknown or changing quantity.' },
      ],
    },

    // 14. Practice L1 - Q1
    {
      id: '9.4-p-l1-q1',
      stepNumber: 14,
      type: 'practice',
      title: 'Practice: Level 1 (Q1)',
      practiceLevel: 'L1',
      practiceQuestion: {
        questionNumber: 1,
        text: 'A function machine multiplies by 3.\n\nWrite down the outputs for the inputs 2, 5 and 10.',
        visualType: 'machine',
        visualData: { operationType: 'multiply', operand: 3, initialInput: 2 },
      },
    },

    // 15. Practice L1 - Q2
    {
      id: '9.4-p-l1-q2',
      stepNumber: 15,
      type: 'practice',
      title: 'Practice: Level 1 (Q2)',
      practiceLevel: 'L1',
      practiceQuestion: {
        questionNumber: 2,
        text: 'A function machine adds 8.\nThe output is 20.\n\nWork out the input.',
        visualType: 'machine',
        visualData: { operationType: 'add', operand: 8, initialInput: 12, allowInverse: true },
      },
    },

    // 16. Practice L1 - Q3
    {
      id: '9.4-p-l1-q3',
      stepNumber: 16,
      type: 'practice',
      title: 'Practice: Level 1 (Q3)',
      practiceLevel: 'L1',
      practiceQuestion: {
        questionNumber: 3,
        text: 'Write "multiply by 4" as a function in x and y.\n\nThen work out the value of y when x = 6.',
      },
    },

    // 17. Practice L2 - Q4
    {
      id: '9.4-p-l2-q4',
      stepNumber: 17,
      type: 'practice',
      title: 'Practice: Level 2 (Q4)',
      practiceLevel: 'L2',
      practiceQuestion: {
        questionNumber: 4,
        text: 'Complete the table for the function y = x + 7:\n\nx:  1,  2,  3,  4\ny:  ?,  ?,  ?,  ?',
        visualType: 'table',
        visualData: {
          ruleLabel: 'y = x + 7',
          rows: [
            { x: 1, y: 8 },
            { x: 2, y: 9 },
            { x: 3, y: 10 },
            { x: 4, y: 11 },
          ],
        },
      },
    },

    // 18. Practice L2 - Q5
    {
      id: '9.4-p-l2-q5',
      stepNumber: 18,
      type: 'practice',
      title: 'Practice: Level 2 (Q5)',
      practiceLevel: 'L2',
      practiceQuestion: {
        questionNumber: 5,
        text: 'A function machine multiplies by 5 and the output is 45.\n\nWork out the input.',
      },
    },

    // 19. Practice L2 - Q6
    {
      id: '9.4-p-l2-q6',
      stepNumber: 19,
      type: 'practice',
      title: 'Practice: Level 2 (Q6)',
      practiceLevel: 'L2',
      practiceQuestion: {
        questionNumber: 6,
        text: 'Pencils cost $2 each.\n\na) Write a function for the cost y of x pencils.\nb) Work out the cost of 9 pencils.\nc) Work out how many pencils are bought for $30.',
      },
    },

    // 20. Practice L3 - Q7
    {
      id: '9.4-p-l3-q7',
      stepNumber: 20,
      type: 'practice',
      title: 'Practice: Level 3 (Q7)',
      practiceLevel: 'L3',
      practiceQuestion: {
        questionNumber: 7,
        text: 'y = x − 4\n\na) Work out y when x = 10.\nb) Work out x when y = 15.',
      },
    },

    // 21. Practice L3 - Q8
    {
      id: '9.4-p-l3-q8',
      stepNumber: 21,
      type: 'practice',
      title: 'Practice: Level 3 (Q8)',
      practiceLevel: 'L3',
      practiceQuestion: {
        questionNumber: 8,
        text: 'Marco says:\n"y = 3x gives two different outputs for the input 2."\n\nExplain why Marco is wrong.',
      },
    },

    // 22. Practice L3 - Q9
    {
      id: '9.4-p-l3-q9',
      stepNumber: 22,
      type: 'practice',
      title: 'Practice: Level 3 (Q9)',
      practiceLevel: 'L3',
      practiceQuestion: {
        questionNumber: 9,
        text: 'A table shows:\nx: 2, 4, 6, 8\ny: 7, 9, 11, 13\n\na) Write down the function in terms of x and y.\nb) Work out the value of y when x = 20.',
      },
    },
  ],
};
