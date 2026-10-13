import { Subtopic } from '../types';

export const subtopic9_3: Subtopic = {
  id: '9.3',
  code: '7As.02',
  number: '9.3',
  title: 'Using the nth term',
  fullTitle: '9.3 Using the nth term',
  themeColor: {
    primary: '#EA580C',
    secondary: '#FFEDD5',
    border: '#FDBA74',
    badgeBg: '#FFEDD5',
    badgeText: '#C2410C',
  },
  steps: [
    // 1. Objectives
    {
      id: '9.3-obj',
      stepNumber: 1,
      type: 'objective',
      title: 'Learning Objectives',
      cambridgeCode: '7As.02',
      keyTerms: ['nth term', 'Position n', 'Formula'],
      sentences: [
        'Understand position-to-term rules of the form n ± a and a × n.',
        'Use the nth term to calculate any term and check membership.',
      ],
    },

    // 2. Concept 1: Position and Term
    {
      id: '9.3-c1',
      stepNumber: 2,
      type: 'concept',
      title: 'Position and Term',
      keyTerms: ['Position (n)', 'Term'],
      sentences: [
        'Every term in a sequence has a position number n.',
        'Term 1 has position n = 1; Term 2 has position n = 2.',
      ],
      componentType: 'PositionTermTable',
      componentProps: {
        ruleName: 'n',
        positions: [1, 2, 3, 4, 5],
        computeFn: (n: number) => n,
        themeColor: '#EA580C',
        initialColumns: 5,
      },
    },

    // 3. Concept 2: Position-to-term rule
    {
      id: '9.3-c2',
      stepNumber: 3,
      type: 'concept',
      title: 'Position-to-Term Rule',
      keyTerms: ['Position-to-term rule', 'nth term'],
      sentences: [
        'We use the letter n to represent any position number.',
        'The nth term rule calculates any term directly from n.',
      ],
      componentType: 'PositionTermTable',
      componentProps: {
        ruleName: 'n + 3',
        positions: [1, 2, 3, 4, 5],
        computeFn: (n: number) => n + 3,
        calculationLabel: (n: number) => `${n} + 3`,
        themeColor: '#EA580C',
        initialColumns: 3,
      },
    },

    // 4. Concept 3: nth term n + 3
    {
      id: '9.3-c3',
      stepNumber: 4,
      type: 'concept',
      title: 'Rule: n + 3',
      keyTerms: ['Add to n'],
      sentences: [
        'Substitute each position number n into the formula.',
        'For n = 1, 2, 3, 4, the terms are 4, 5, 6, 7.',
      ],
      componentType: 'PositionTermTable',
      componentProps: {
        ruleName: 'n + 3',
        positions: [1, 2, 3, 4, 5],
        computeFn: (n: number) => n + 3,
        calculationLabel: (n: number) => `${n} + 3 = ${n + 3}`,
        themeColor: '#EA580C',
        initialColumns: 4,
      },
    },

    // 5. Concept 4: nth term n - 2
    {
      id: '9.3-c4',
      stepNumber: 5,
      type: 'concept',
      title: 'Rule: n − 2',
      keyTerms: ['Subtract from n', 'Negative terms'],
      sentences: [
        'When n = 1, the term is 1 − 2 = −1.',
        'For n = 1, 2, 3, 4, the terms are −1, 0, 1, 2.',
      ],
      componentType: 'PositionTermTable',
      componentProps: {
        ruleName: 'n - 2',
        positions: [1, 2, 3, 4, 5],
        computeFn: (n: number) => n - 2,
        calculationLabel: (n: number) => `${n} - 2 = ${n - 2}`,
        themeColor: '#EA580C',
        initialColumns: 4,
      },
    },

    // 6. Concept 5: nth term 4n
    {
      id: '9.3-c5',
      stepNumber: 6,
      type: 'concept',
      title: 'Rule: 4n (Multiples)',
      keyTerms: ['4n means 4 × n'],
      sentences: [
        'In algebra, 4n means 4 multiplied by n.',
        'For n = 1, 2, 3, 4, the terms are 4, 8, 12, 16.',
      ],
      componentType: 'PositionTermTable',
      componentProps: {
        ruleName: '4n',
        positions: [1, 2, 3, 4, 5],
        computeFn: (n: number) => 4 * n,
        calculationLabel: (n: number) => `4 × ${n} = ${4 * n}`,
        themeColor: '#EA580C',
        initialColumns: 4,
      },
    },

    // 7. Concept 6: Jumping straight to 10th and 20th terms
    {
      id: '9.3-c6',
      stepNumber: 7,
      type: 'concept',
      title: 'Jumping Directly to Any Term',
      keyTerms: ['10th term', '20th term'],
      sentences: [
        'The nth term lets you jump to any term without listing all previous ones.',
        'If the nth term is 5n: 10th term = 5 × 10 = 50; 20th term = 5 × 20 = 100.',
      ],
      componentType: 'PositionTermTable',
      componentProps: {
        ruleName: '5n',
        positions: [1, 2, 5, 10, 20],
        computeFn: (n: number) => 5 * n,
        calculationLabel: (n: number) => `5 × ${n}`,
        themeColor: '#EA580C',
        initialColumns: 3,
      },
    },

    // 8. Concept 7: Describing sequences with an nth term
    {
      id: '9.3-c7',
      stepNumber: 8,
      type: 'concept',
      title: 'Finding the nth Term',
      keyTerms: ['Compare with n'],
      sentences: [
        '5, 10, 15, 20 has nth term 5n (5 times table).',
        '4, 5, 6, 7 has nth term n + 3 (each term is 3 more than position n).',
      ],
      componentType: 'PositionTermTable',
      componentProps: {
        ruleName: '5n',
        positions: [1, 2, 3, 4],
        computeFn: (n: number) => 5 * n,
        themeColor: '#EA580C',
        initialColumns: 4,
      },
    },

    // 9. Concept 8: Is a number in the sequence?
    {
      id: '9.3-c8',
      stepNumber: 9,
      type: 'concept',
      title: 'Checking if a Number is a Term',
      keyTerms: ['Solve equation', 'Whole number n'],
      sentences: [
        'Is 65 in the sequence 5n? Solve 5n = 65 gives n = 13 (whole number, so yes!).',
        'Is 62 in 5n? 62 ÷ 5 = 12.4 (not a whole number, so no).',
      ],
      componentType: 'PositionTermTable',
      componentProps: {
        ruleName: '5n = \\text{Term}',
        positions: [11, 12, 13, 14],
        computeFn: (n: number) => 5 * n,
        calculationLabel: (n: number) => `5 × ${n} = ${5 * n}`,
        themeColor: '#EA580C',
        initialColumns: 4,
      },
    },

    // 10. Worked Example 1
    {
      id: '9.3-we1',
      stepNumber: 10,
      type: 'worked-example',
      title: 'Worked Example 1',
      sentences: [
        'The nth term of a sequence is 6n.',
      ],
      workedExample: {
        problem: 'Find the 8th term, and find the position of the term 54',
        steps: [
          {
            label: 'Part a: 8th term',
            math: '\\text{For } n = 8: \\quad 6 \\times 8 = 48',
            explanation: 'The 8th term is 48.',
          },
          {
            label: 'Part b: Position of term 54',
            math: '6n = 54 \\implies n = 54 \\div 6 = 9',
            explanation: 'Position is n = 9 (the 9th term).',
          },
        ],
      },
    },

    // 11. Worked Example 2
    {
      id: '9.3-we2',
      stepNumber: 11,
      type: 'worked-example',
      title: 'Worked Example 2',
      sentences: [
        'Find the nth term of the sequence 9, 10, 11, 12.',
      ],
      workedExample: {
        problem: 'Find the nth term of 9, 10, 11, 12',
        steps: [
          {
            label: 'Step 1: Compare each term to position n',
            explanation: 'Position 1: 9 (1 + 8). Position 2: 10 (2 + 8). Position 3: 11 (3 + 8).',
          },
          {
            label: 'Step 2: Write the rule',
            math: '\\text{nth term} = n + 8',
            explanation: 'Each term is 8 more than its position number.',
          },
        ],
      },
    },

    // 12. Common Mistakes
    {
      id: '9.3-mistakes',
      stepNumber: 12,
      type: 'common-mistake',
      title: 'Common Mistakes',
      keyTerms: ['4n vs 4+n', 'Position vs Term'],
      sentences: [
        '4n means 4 multiplied by n, never 4 plus n.',
        'Do not confuse the position number with the value of the term.',
      ],
      mistakeContent: {
        misconception: 'Writing the term-to-term rule "add 5" when asked for the nth term.',
        correction: 'The term-to-term rule tells how to step forward; the nth term relates position n directly to the term.',
        takeaway: 'Check: does substituting n = 1, 2, 3 into your formula give the correct sequence terms?',
      },
    },

    // 13. Vocabulary
    {
      id: '9.3-vocab',
      stepNumber: 13,
      type: 'vocabulary',
      title: 'Unit Vocabulary',
      vocabList: [
        { term: 'nth term', meaning: 'An algebraic expression showing the value of the term at position n.' },
        { term: 'Position (n)', meaning: 'The location of a term in the sequence (1st, 2nd, 3rd, ...).' },
        { term: 'Position-to-term rule', meaning: 'A rule that uses the position number n to calculate the term.' },
        { term: 'Formula', meaning: 'A mathematical relationship expressed using letters and symbols.' },
        { term: 'Variable (n)', meaning: 'A letter representing any whole position number.' },
        { term: 'Multiples', meaning: 'Numbers in a times table, expressed in algebra as an (e.g. 3n, 4n).' },
      ],
    },

    // 14. Practice L1 - Q1
    {
      id: '9.3-p-l1-q1',
      stepNumber: 14,
      type: 'practice',
      title: 'Practice: Level 1 (Q1)',
      practiceLevel: 'L1',
      practiceQuestion: {
        questionNumber: 1,
        text: 'The nth term of a sequence is n + 5.\n\nWrite down the first four terms of the sequence.',
      },
    },

    // 15. Practice L1 - Q2
    {
      id: '9.3-p-l1-q2',
      stepNumber: 15,
      type: 'practice',
      title: 'Practice: Level 1 (Q2)',
      practiceLevel: 'L1',
      practiceQuestion: {
        questionNumber: 2,
        text: 'The nth term of a sequence is 3n.\n\nWrite down the first four terms and the 10th term.',
      },
    },

    // 16. Practice L1 - Q3
    {
      id: '9.3-p-l1-q3',
      stepNumber: 16,
      type: 'practice',
      title: 'Practice: Level 1 (Q3)',
      practiceLevel: 'L1',
      practiceQuestion: {
        questionNumber: 3,
        text: 'The nth term of a sequence is n − 2.\n\nWork out the 5th term.',
      },
    },

    // 17. Practice L2 - Q4
    {
      id: '9.3-p-l2-q4',
      stepNumber: 17,
      type: 'practice',
      title: 'Practice: Level 2 (Q4)',
      practiceLevel: 'L2',
      practiceQuestion: {
        questionNumber: 4,
        text: 'Write down the nth term of the sequence:\n\n6, 12, 18, 24, ...',
      },
    },

    // 18. Practice L2 - Q5
    {
      id: '9.3-p-l2-q5',
      stepNumber: 18,
      type: 'practice',
      title: 'Practice: Level 2 (Q5)',
      practiceLevel: 'L2',
      practiceQuestion: {
        questionNumber: 5,
        text: 'Write down the nth term of the sequence:\n\n8, 9, 10, 11, ...',
      },
    },

    // 19. Practice L2 - Q6
    {
      id: '9.3-p-l2-q6',
      stepNumber: 19,
      type: 'practice',
      title: 'Practice: Level 2 (Q6)',
      practiceLevel: 'L2',
      practiceQuestion: {
        questionNumber: 6,
        text: 'The nth term of a sequence is 4n.\n\nWork out the 12th term and find the position of the term 60.',
      },
    },

    // 20. Practice L3 - Q7
    {
      id: '9.3-p-l3-q7',
      stepNumber: 20,
      type: 'practice',
      title: 'Practice: Level 3 (Q7)',
      practiceLevel: 'L3',
      practiceQuestion: {
        questionNumber: 7,
        text: 'The nth term is 5n.\n\nIs 75 a term? Is 82 a term?\nExplain your answers clearly.',
      },
    },

    // 21. Practice L3 - Q8
    {
      id: '9.3-p-l3-q8',
      stepNumber: 21,
      type: 'practice',
      title: 'Practice: Level 3 (Q8)',
      practiceLevel: 'L3',
      practiceQuestion: {
        questionNumber: 8,
        text: 'The nth term is n + 9.\n\nWhich term is equal to 31?',
      },
    },

    // 22. Practice L3 - Q9
    {
      id: '9.3-p-l3-q9',
      stepNumber: 22,
      type: 'practice',
      title: 'Practice: Level 3 (Q9)',
      practiceLevel: 'L3',
      practiceQuestion: {
        questionNumber: 9,
        text: 'A student says the nth term of 7, 14, 21, 28 is n + 7.\n\nExplain why this is wrong and write down the correct nth term.',
      },
    },
  ],
};
