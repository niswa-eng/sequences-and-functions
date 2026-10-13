import { Subtopic } from '../types';

export const subtopic9_1: Subtopic = {
  id: '9.1',
  code: '7As.01',
  number: '9.1',
  title: 'Generating sequences (1)',
  fullTitle: '9.1 Generating sequences (1)',
  themeColor: {
    primary: '#1D70B8',
    secondary: '#E0F2FE',
    border: '#93C5FD',
    badgeBg: '#DBEAFE',
    badgeText: '#1E40AF',
  },
  steps: [
    // 1. Objectives
    {
      id: '9.1-obj',
      stepNumber: 1,
      type: 'objective',
      title: 'Learning Objectives',
      cambridgeCode: '7As.01',
      keyTerms: ['Sequence', 'Term', 'Rule'],
      sentences: [
        'Understand and generate integer number sequences.',
        'Find and use term-to-term rules to continue sequences.',
      ],
    },

    // 2. Concept 1: Sequence & Term
    {
      id: '9.1-c1',
      stepNumber: 2,
      type: 'concept',
      title: 'Sequences and Terms',
      keyTerms: ['Sequence', 'Term'],
      sentences: [
        'A sequence is a list of numbers in a special order.',
        'Each number in the sequence is called a term.',
      ],
      componentType: 'SequenceStrip',
      componentProps: {
        start: 2,
        diff: 5,
        initialVisible: 4,
        maxTerms: 6,
        ruleLabel: 'Add 5',
        themeColor: '#1D70B8',
      },
    },

    // 3. Concept 2: Term-to-term rule
    {
      id: '9.1-c2',
      stepNumber: 3,
      type: 'concept',
      title: 'The Term-to-Term Rule',
      keyTerms: ['Term-to-term rule'],
      sentences: [
        'The term-to-term rule tells you how to get from one term to the next.',
        'It describes what is added or subtracted each time.',
      ],
      componentType: 'SequenceStrip',
      componentProps: {
        start: 4,
        diff: 6,
        initialVisible: 3,
        maxTerms: 5,
        ruleLabel: 'Add 6',
        themeColor: '#1D70B8',
      },
    },

    // 4. Concept 3: Increasing sequences
    {
      id: '9.1-c3',
      stepNumber: 4,
      type: 'concept',
      title: 'Increasing Sequences',
      keyTerms: ['Increasing', 'Add'],
      sentences: [
        'An increasing sequence goes up by adding the same number each time.',
        'In the sequence 3, 7, 11, 15, the term-to-term rule is add 4.',
      ],
      componentType: 'SequenceStrip',
      componentProps: {
        start: 3,
        diff: 4,
        initialVisible: 4,
        maxTerms: 6,
        ruleLabel: 'Add 4',
        themeColor: '#1D70B8',
      },
    },

    // 5. Concept 4: Decreasing sequences
    {
      id: '9.1-c4',
      stepNumber: 5,
      type: 'concept',
      title: 'Decreasing Sequences',
      keyTerms: ['Decreasing', 'Subtract'],
      sentences: [
        'A decreasing sequence goes down by subtracting the same number each time.',
        'In 50, 45, 40, 35, the term-to-term rule is subtract 5.',
      ],
      componentType: 'SequenceStrip',
      componentProps: {
        start: 50,
        diff: -5,
        initialVisible: 4,
        maxTerms: 6,
        ruleLabel: 'Subtract 5',
        themeColor: '#1D70B8',
      },
    },

    // 6. Concept 5: Generating from first term
    {
      id: '9.1-c5',
      stepNumber: 6,
      type: 'concept',
      title: 'Generating a Sequence',
      keyTerms: ['First term', 'Rule'],
      sentences: [
        'Start with the first term and apply the rule step by step.',
        'First term: 6. Term-to-term rule: add 3.',
      ],
      componentType: 'SequenceStrip',
      componentProps: {
        start: 6,
        diff: 3,
        initialVisible: 3,
        maxTerms: 5,
        ruleLabel: 'Add 3',
        themeColor: '#1D70B8',
      },
    },

    // 7. Concept 6: Finding the rule
    {
      id: '9.1-c6',
      stepNumber: 7,
      type: 'concept',
      title: 'Finding the Difference',
      keyTerms: ['Consecutive', 'Difference'],
      sentences: [
        'Work out the difference between consecutive terms to find the rule.',
        'Check more than one pair of terms to confirm.',
      ],
      componentType: 'SequenceStrip',
      componentProps: {
        start: 8,
        diff: 7,
        initialVisible: 4,
        maxTerms: 5,
        ruleLabel: 'Difference = 15 − 8 = 7',
        themeColor: '#1D70B8',
      },
    },

    // 8. Concept 7: Sequence into negatives
    {
      id: '9.1-c7',
      stepNumber: 8,
      type: 'concept',
      title: 'Continuing into Negative Numbers',
      keyTerms: ['Negative numbers', 'Zero'],
      sentences: [
        'A decreasing sequence can continue past zero into negative numbers.',
        'Sequence: 12, 8, 4, 0, −4, −8 with rule subtract 4.',
      ],
      componentType: 'NumberLine',
      componentProps: {
        terms: [12, 8, 4, 0, -4, -8],
        diff: -4,
        initialRevealed: 3,
        themeColor: '#1D70B8',
      },
    },

    // 9. Worked Example 1
    {
      id: '9.1-we1',
      stepNumber: 9,
      type: 'worked-example',
      title: 'Worked Example 1',
      sentences: [
        'Find the term-to-term rule and the next two terms of 13, 20, 27, 34.',
      ],
      workedExample: {
        problem: 'Find the rule and the next two terms of 13, 20, 27, 34',
        steps: [
          {
            label: 'Step 1: Find the difference',
            math: '20 - 13 = 7 \\quad \\text{and} \\quad 27 - 20 = 7',
            explanation: 'The difference between consecutive terms is +7.',
          },
          {
            label: 'Step 2: State the rule',
            explanation: 'Term-to-term rule is add 7.',
          },
          {
            label: 'Step 3: Work out 5th and 6th terms',
            math: '34 + 7 = 41 \\quad \\text{and} \\quad 41 + 7 = 48',
            explanation: 'Next two terms are 41 and 48.',
          },
        ],
      },
    },

    // 10. Worked Example 2
    {
      id: '9.1-we2',
      stepNumber: 10,
      type: 'worked-example',
      title: 'Worked Example 2',
      sentences: [
        'The first term is 40 and the term-to-term rule is subtract 7.',
      ],
      workedExample: {
        problem: 'Write down the first five terms from first term 40 and rule subtract 7',
        steps: [
          {
            label: '1st term',
            math: '40',
          },
          {
            label: '2nd term',
            math: '40 - 7 = 33',
          },
          {
            label: '3rd term',
            math: '33 - 7 = 26',
          },
          {
            label: '4th term',
            math: '26 - 7 = 19',
          },
          {
            label: '5th term',
            math: '19 - 7 = 12',
          },
        ],
      },
    },

    // 11. Common Mistakes
    {
      id: '9.1-mistakes',
      stepNumber: 11,
      type: 'common-mistake',
      title: 'Common Mistakes',
      keyTerms: ['Check terms', 'Direction'],
      sentences: [
        'Always check multiple terms to be certain of the rule.',
        'Watch out for the difference between increasing and decreasing.',
      ],
      mistakeContent: {
        misconception: 'Checking only the first two terms before stating the rule.',
        correction: 'Always check at least two consecutive differences: (Term 2 − Term 1) and (Term 3 − Term 2).',
        takeaway: 'Confusing "increasing" with "decreasing" leads to adding instead of subtracting.',
      },
    },

    // 12. Vocabulary
    {
      id: '9.1-vocab',
      stepNumber: 12,
      type: 'vocabulary',
      title: 'Unit Vocabulary',
      vocabList: [
        { term: 'Sequence', meaning: 'An ordered list of numbers formed by a rule.' },
        { term: 'Term', meaning: 'A single number within a sequence.' },
        { term: 'Term-to-term rule', meaning: 'The rule that connects any term to the next term.' },
        { term: 'Increasing', meaning: 'Getting larger in value (usually by adding).' },
        { term: 'Decreasing', meaning: 'Getting smaller in value (usually by subtracting).' },
        { term: 'First term', meaning: 'The very first number that starts the sequence.' },
        { term: 'Consecutive', meaning: 'Following continuously in unbroken order.' },
        { term: 'Difference', meaning: 'The result of subtracting one term from the next.' },
      ],
    },

    // 13. Practice L1 - Q1
    {
      id: '9.1-p-l1-q1',
      stepNumber: 13,
      type: 'practice',
      title: 'Practice: Level 1 (Q1)',
      practiceLevel: 'L1',
      practiceQuestion: {
        questionNumber: 1,
        text: '5, 9, 13, 17, ... \n\nWrite down the term-to-term rule and the next two terms.',
        visualType: 'sequence',
        visualData: { start: 5, diff: 4, initialVisible: 4, maxTerms: 6 },
      },
    },

    // 14. Practice L1 - Q2
    {
      id: '9.1-p-l1-q2',
      stepNumber: 14,
      type: 'practice',
      title: 'Practice: Level 1 (Q2)',
      practiceLevel: 'L1',
      practiceQuestion: {
        questionNumber: 2,
        text: 'The first term is 20 and the rule is subtract 3.\n\nWrite down the first five terms of the sequence.',
      },
    },

    // 15. Practice L1 - Q3
    {
      id: '9.1-p-l1-q3',
      stepNumber: 15,
      type: 'practice',
      title: 'Practice: Level 1 (Q3)',
      practiceLevel: 'L1',
      practiceQuestion: {
        questionNumber: 3,
        text: '100, 90, 80, 70, ...\n\nWrite down the next two terms.',
        visualType: 'sequence',
        visualData: { start: 100, diff: -10, initialVisible: 4, maxTerms: 6 },
      },
    },

    // 16. Practice L2 - Q4
    {
      id: '9.1-p-l2-q4',
      stepNumber: 16,
      type: 'practice',
      title: 'Practice: Level 2 (Q4)',
      practiceLevel: 'L2',
      practiceQuestion: {
        questionNumber: 4,
        text: 'Complete the sequence:\n\n6,  __ ,  14,  __ ,  22',
        visualType: 'sequence',
        visualData: {
          customTerms: [6, '?', 14, '?', 22],
          showMissingIndices: [1, 3],
          initialVisible: 5,
        },
      },
    },

    // 17. Practice L2 - Q5
    {
      id: '9.1-p-l2-q5',
      stepNumber: 17,
      type: 'practice',
      title: 'Practice: Level 2 (Q5)',
      practiceLevel: 'L2',
      practiceQuestion: {
        questionNumber: 5,
        text: 'The first term is 7 and the rule is add 6.\n\nWork out the 8th term of the sequence.',
      },
    },

    // 18. Practice L2 - Q6
    {
      id: '9.1-p-l2-q6',
      stepNumber: 18,
      type: 'practice',
      title: 'Practice: Level 2 (Q6)',
      practiceLevel: 'L2',
      practiceQuestion: {
        questionNumber: 6,
        text: 'Maya says the rule for 4, 9, 14, 19 is "add 4".\n\nExplain why Maya is wrong.',
      },
    },

    // 19. Practice L3 - Q7
    {
      id: '9.1-p-l3-q7',
      stepNumber: 19,
      type: 'practice',
      title: 'Practice: Level 3 (Q7)',
      practiceLevel: 'L3',
      practiceQuestion: {
        questionNumber: 7,
        text: 'A sequence starts at 2 and the rule is add 5.\n\nIs 52 a term? Is 60 a term? Explain your answers.',
      },
    },

    // 20. Practice L3 - Q8
    {
      id: '9.1-p-l3-q8',
      stepNumber: 20,
      type: 'practice',
      title: 'Practice: Level 3 (Q8)',
      practiceLevel: 'L3',
      practiceQuestion: {
        questionNumber: 8,
        text: 'A sequence starts at 50 and the rule is subtract 6.\n\nWrite down the first term that is negative.',
      },
    },

    // 21. Practice L3 - Q9
    {
      id: '9.1-p-l3-q9',
      stepNumber: 21,
      type: 'practice',
      title: 'Practice: Level 3 (Q9)',
      practiceLevel: 'L3',
      practiceQuestion: {
        questionNumber: 9,
        text: 'The term-to-term rule is add 3 and the 4th term is 19.\n\nWork out the first term.',
      },
    },
  ],
};
