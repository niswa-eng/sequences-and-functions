import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  children: string;
  className?: string;
  displayMode?: boolean;
}

export const MathText: React.FC<MathTextProps> = ({
  children,
  className = '',
  displayMode = false,
}) => {
  const renderedHtml = useMemo(() => {
    if (!children) return '';
    try {
      // Split on $...$ or $$...$$
      // If entire text has no $, check if it contains mathematical operators like =, +, -, \times
      // Or parse $ delimiters
      const parts = children.split(/(\$\$[\s\S]*?\$\$|\$[^\$]*?\$)/g);
      
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
        return part;
      }).join('');
    } catch {
      return children;
    }
  }, [children]);

  return (
    <span
      className={`inline-math leading-relaxed ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};
