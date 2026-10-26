import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  children: string;
  className?: string;
  displayMode?: boolean;
  mathMode?: boolean;
}

export const MathText: React.FC<MathTextProps> = ({
  children,
  className = '',
  displayMode = false,
  mathMode = false,
}) => {
  const renderedHtml = useMemo(() => {
    if (!children) return '';

    const trimmed = children.trim();

    // If explicitly in mathMode, or if the string contains LaTeX commands (\text, \quad, \times, etc.)
    const hasLatexCommands = /\\[a-zA-Z]+/.test(trimmed);
    const isEnclosedMath = (trimmed.startsWith('$') && trimmed.endsWith('$')) ||
                           (trimmed.startsWith('$$') && trimmed.endsWith('$$'));

    if (mathMode || hasLatexCommands || (isEnclosedMath && !trimmed.slice(1, -1).includes('$'))) {
      try {
        // Strip any wrapping $ or $$
        let formula = trimmed;
        if (formula.startsWith('$$') && formula.endsWith('$$')) {
          formula = formula.slice(2, -2).trim();
        } else if (formula.startsWith('$') && formula.endsWith('$')) {
          formula = formula.slice(1, -1).trim();
        }

        return katex.renderToString(formula, {
          displayMode,
          throwOnError: false,
        });
      } catch {
        return `<span>${children}</span>`;
      }
    }

    try {
      // Protect standalone currency signs: e.g. "$2", "$30", "$100"
      const currencyPlaceholder = '___CURRENCY_DOLLAR___';
      const sanitizedText = children.replace(/\$(\d+(?:\.\d+)?)/g, `${currencyPlaceholder}$1`);

      // Split by $...$ or $$...$$
      const parts = sanitizedText.split(/(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g);

      return parts.map((part) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const formula = part.slice(2, -2).trim();
          try {
            return katex.renderToString(formula, {
              displayMode: true,
              throwOnError: false,
            });
          } catch {
            return `<span>${formula}</span>`;
          }
        } else if (part.startsWith('$') && part.endsWith('$')) {
          const formula = part.slice(1, -1).trim();
          try {
            return katex.renderToString(formula, {
              displayMode: false,
              throwOnError: false,
            });
          } catch {
            return `<span>${formula}</span>`;
          }
        }
        return part.replace(new RegExp(currencyPlaceholder, 'g'), '$');
      }).join('');
    } catch {
      return children;
    }
  }, [children, displayMode, mathMode]);

  return (
    <span
      className={`inline-math leading-relaxed ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};
