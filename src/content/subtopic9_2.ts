import { Subtopic } from '../types';

export const subtopic9_2: Subtopic = {
  id: '9.2',
  code: '7As.01',
  number: '9.2',
  title: 'Generating sequences (2)',
  fullTitle: '9.2 Generating sequences (2)',
  themeColor: {
    primary: '#0D9488',
    secondary: '#CCFBF1',
    border: '#5EEAD4',
    badgeBg: '#E0F2FE',
    badgeText: '#0F766E',
  },
  steps: [
    // 1. Objectives
    {
      id: '9.2-obj',
      stepNumber: 1,
      type: 'objective',
      title: 'Learning Objectives',
      cambridgeCode: '7As.01',
      keyTerms: ['Spatial pattern', 'Matchsticks', 'Pattern number'],
      sentences: [
        'Explore sequences formed by visual and spatial patterns.',
        'Count elements and find term-to-term rules connecting shapes.',
      ],
    },

    // 2. Concept 1: Patterns made of shapes
    {
      id: '9.2-c1',
      stepNumber: 2,
      type: 'concept',
      title: 'Patterns and Sequences',
      keyTerms: ['Pattern', 'Pattern number'],
      sentences: [
        'Patterns made from shapes or sticks generate number sequences.',
        'Count the elements in Pattern 1, Pattern 2, and Pattern 3.',
      ],
      componentType: 'PatternBuilder',
      componentProps: {
        patternType: 'squares',
        initialPattern: 1,
        maxPattern: 4,
        themeColor: '#0D9488',
        addedColor: '#F59E0B',
      },
    },

    // 3. Concept 2: Matchstick squares in a row
    {
      id: '9.2-c2',
      stepNumber: 3,
      type: 'concept',
      title: 'Matchstick Squares in a Row',
      keyTerms: ['Matchstick', 'Shared edge'],
      sentences: [
        'Pattern 1 uses 4 matchsticks. Each new square shares a side.',
        'Every new square adds 3 matchsticks: 4, 7, 10, 13.',
      ],
      componentType: 'PatternBuilder',
      componentProps: {
        patternType: 'squares',
        initialPattern: 2,
        maxPattern: 5,
        themeColor: '#0D9488',
        addedColor: '#F59E0B',
      },
    },

    // 4. Concept 3: Matchstick triangles in a row
    {
      id: '9.2-c3',
      stepNumber: 4,
      type: 'concept',
      title: 'Triangles in a Row',
      keyTerms: ['Triangles', 'Add 2'],
      sentences: [
        'Pattern 1 needs 3 matchsticks to build one triangle.',
        'Each extra triangle in the row adds 2 matchsticks: 3, 5, 7, 9.',
      ],
      componentType: 'PatternBuilder',
      componentProps: {
        patternType: 'triangles',
        initialPattern: 2,
        maxPattern: 5,
        themeColor: '#0D9488',
        addedColor: '#F59E0B',
      },
    },

    // 5. Concept 4: Tile & dot patterns
    {
      id: '9.2-c4',
      stepNumber: 5,
      type: 'concept',
      title: 'Tile and Dot Patterns',
      keyTerms: ['Tiles', 'Constant growth'],
      sentences: [
        'A pattern of tiles that grows by the same amount creates a linear sequence.',
        'Number of tiles: 5, 8, 11, 14 (rule add 3).',
      ],
      componentType: 'PatternBuilder',
      componentProps: {
        patternType: 'tiles',
        initialPattern: 1,
        maxPattern: 4,
        themeColor: '#0D9488',
        addedColor: '#F59E0B',
      },
    },

    // 6. Concept 5: Linking picture to the rule
    {
      id: '9.2-c5',
      stepNumber: 6,
      type: 'concept',
      title: 'Linking Picture to the Rule',
      keyTerms: ['Added part', 'Colour code'],
      sentences: [
        'Look at what changes between patterns to spot the rule.',
        'Colouring the newly added pieces reveals the constant difference.',
      ],
      componentType: 'PatternBuilder',
      componentProps: {
        patternType: 'squares',
        initialPattern: 3,
        maxPattern: 5,
        themeColor: '#0D9488',
        addedColor: '#F59E0B',
      },
    },

    // 7. Concept 6: Decreasing pattern
    {
      id: '9.2-c6',
      stepNumber: 7,
      type: 'concept',
      title: 'Decreasing Pattern',
      keyTerms: ['Counters', 'Subtract 3'],
      sentences: [
        'Patterns can also decrease when items are removed.',
        'Start with 20 counters and remove 3 each time: 20, 17, 14, 11.',
      ],
      componentType: 'PatternBuilder',
      componentProps: {
        patternType: 'counters',
        initialPattern: 1,
        maxPattern: 5,
        themeColor: '#0D9488',
        addedColor: '#DC2626',
      },
    },

    // 8. Concept 7: Continuing without drawing
    {
      id: '9.2-c7',
      stepNumber: 8,
      type: 'concept',
      title: 'Continuing Beyond Drawing',
      keyTerms: ['Continue', 'Pattern 8'],
      sentences: [
        'Use the term-to-term rule to find later patterns without drawing.',
        'Pattern 1: 4. Add 3 repeatedly to reach Pattern 7 or 8.',
      ],
      componentType: 'SequenceStrip',
      componentProps: {
        start: 4,
        diff: 3,
        initialVisible: 4,
        maxTerms: 8,
        ruleLabel: 'Add 3',
        themeColor: '#0D9488',
      },
    },

    // 9. Worked Example 1
    {
      id: '9.2-we1',
      stepNumber: 9,
      type: 'worked-example',
      title: 'Worked Example 1',
      sentences: [
        'Squares in a row: 4, 7, 10, 13 matchsticks.',
      ],
      workedExample: {
        problem: 'Find the number of matchsticks in Pattern 7',
        steps: [
          {
            label: 'Step 1: Identify the sequence',
            explanation: 'Pattern 1: 4, Pattern 2: 7, Pattern 3: 10, Pattern 4: 13.',
          },
          {
            label: 'Step 2: Find the term-to-term rule',
            math: '7 - 4 = 3 \\quad \\text{and} \\quad 10 - 7 = 3',
            explanation: 'The rule is add 3 matchsticks.',
          },
          {
            label: 'Step 3: Continue to Pattern 7',
            math: '13 + 3 = 16 \\;(\\text{P5}) \\rightarrow 16 + 3 = 19 \\;(\\text{P6}) \\rightarrow 19 + 3 = 22 \\;(\\text{P7})',
            explanation: 'Pattern 7 uses 22 matchsticks.',
          },
        ],
      },
    },

    // 10. Worked Example 2
    {
      id: '9.2-we2',
      stepNumber: 10,
      type: 'worked-example',
      title: 'Worked Example 2',
      sentences: [
        'A dot pattern has 5 dots in Pattern 1, 9 dots in Pattern 2, and 13 dots in Pattern 3.',
      ],
      workedExample: {
        problem: 'Find the rule and how many dots are in Pattern 5',
        steps: [
          {
            label: 'Step 1: Check difference',
            math: '9 - 5 = 4 \\quad \\text{and} \\quad 13 - 9 = 4',
            explanation: 'Each pattern adds 4 dots.',
          },
          {
            label: 'Step 2: Work out Pattern 4 and 5',
            math: '13 + 4 = 17 \\;(\\text{P4}) \\quad \\text{and} \\quad 17 + 4 = 21 \\;(\\text{P5})',
            explanation: 'Pattern 5 has 21 dots.',
          },
        ],
      },
    },

    // 11. Common Mistakes
    {
      id: '9.2-mistakes',
      stepNumber: 11,
      type: 'common-mistake',
      title: 'Common Mistakes',
      keyTerms: ['Shared sides', 'Total vs change'],
      sentences: [
        'Never count shared matchsticks twice when shapes touch.',
        'The rule describes the increase, not the total number.',
      ],
      mistakeContent: {
        misconception: 'Counting 4 matchsticks for every single square: 4 × 3 = 12 for 3 squares.',
        correction: 'Because the squares share inside matchsticks, 3 squares only need 4 + 3 + 3 = 10 matchsticks.',
        takeaway: 'Pattern 1 is the first term; remember to separate what you start with from what is added.',
      },
    },

    // 12. Vocabulary
    {
      id: '9.2-vocab',
      stepNumber: 12,
      type: 'vocabulary',
      title: 'Unit Vocabulary',
      vocabList: [
        { term: 'Spatial pattern', meaning: 'A visual pattern formed by shapes, sticks, or tiles in space.' },
        { term: 'Pattern number', meaning: 'The position (1st, 2nd, 3rd) of a diagram in a pattern sequence.' },
        { term: 'Matchstick', meaning: 'A line segment representing one unit in a stick diagram.' },
        { term: 'Shared edge', meaning: 'A side where two adjacent shapes join together.' },
        { term: 'Term-to-term rule', meaning: 'The number of elements added or removed for each step.' },
        { term: 'Continue', meaning: 'To extend the pattern sequence following the consistent rule.' },
      ],
    },

    // 13. Practice L1 - Q1
    {
      id: '9.2-p-l1-q1',
      stepNumber: 13,
      type: 'practice',
      title: 'Practice: Level 1 (Q1)',
      practiceLevel: 'L1',
      practiceQuestion: {
        questionNumber: 1,
        text: 'Squares in a row made with matchsticks:\nPattern 1: 4 sticks\nPattern 2: 7 sticks\nPattern 3: 10 sticks\n\nDraw Pattern 4 and write down how many matchsticks it uses.',
        visualType: 'pattern',
        visualData: { patternType: 'squares', initialPattern: 3, maxPattern: 4, themeColor: '#0D9488' },
      },
    },

    // 14. Practice L1 - Q2
    {
      id: '9.2-p-l1-q2',
      stepNumber: 14,
      type: 'practice',
      title: 'Practice: Level 1 (Q2)',
      practiceLevel: 'L1',
      practiceQuestion: {
        questionNumber: 2,
        text: 'A tile pattern uses 5, 8, 11 tiles.\n\nWrite down the term-to-term rule and the number of tiles in Pattern 4.',
      },
    },

    // 15. Practice L1 - Q3
    {
      id: '9.2-p-l1-q3',
      stepNumber: 15,
      type: 'practice',
      title: 'Practice: Level 1 (Q3)',
      practiceLevel: 'L1',
      practiceQuestion: {
        questionNumber: 3,
        text: 'A row of triangles uses 3, 5, 7 matchsticks.\n\nWrite down the next two terms in the sequence.',
        visualType: 'pattern',
        visualData: { patternType: 'triangles', initialPattern: 3, maxPattern: 5, themeColor: '#0D9488' },
      },
    },

    // 16. Practice L2 - Q4
    {
      id: '9.2-p-l2-q4',
      stepNumber: 16,
      type: 'practice',
      title: 'Practice: Level 2 (Q4)',
      practiceLevel: 'L2',
      practiceQuestion: {
        questionNumber: 4,
        text: 'Pattern 1 has 6 dots and each pattern has 4 more dots.\n\nHow many dots are in Pattern 5?',
      },
    },

    // 17. Practice L2 - Q5
    {
      id: '9.2-p-l2-q5',
      stepNumber: 17,
      type: 'practice',
      title: 'Practice: Level 2 (Q5)',
      practiceLevel: 'L2',
      practiceQuestion: {
        questionNumber: 5,
        text: 'Pattern 1 has 20 counters and each pattern has 3 fewer counters.\n\nHow many counters are in Pattern 6?',
      },
    },

    // 18. Practice L2 - Q6
    {
      id: '9.2-p-l2-q6',
      stepNumber: 18,
      type: 'practice',
      title: 'Practice: Level 2 (Q6)',
      practiceLevel: 'L2',
      practiceQuestion: {
        questionNumber: 6,
        text: 'A pattern uses 5, 9, 13 matchsticks.\n\nZara says Pattern 10 uses 40 matchsticks.\nUse the rule to check her answer and explain.',
      },
    },

    // 19. Practice L3 - Q7
    {
      id: '9.2-p-l3-q7',
      stepNumber: 19,
      type: 'practice',
      title: 'Practice: Level 3 (Q7)',
      practiceLevel: 'L3',
      practiceQuestion: {
        questionNumber: 7,
        text: 'Squares in a row use 4, 7, 10 matchsticks.\n\nHow many matchsticks are needed for Pattern 8?',
      },
    },

    // 20. Practice L3 - Q8
    {
      id: '9.2-p-l3-q8',
      stepNumber: 20,
      type: 'practice',
      title: 'Practice: Level 3 (Q8)',
      practiceLevel: 'L3',
      practiceQuestion: {
        questionNumber: 8,
        text: 'Squares in a row: 4, 7, 10, ...\n\nA pattern uses 31 matchsticks.\nWhich pattern number is it?',
      },
    },

    // 21. Practice L3 - Q9
    {
      id: '9.2-p-l3-q9',
      stepNumber: 21,
      type: 'practice',
      title: 'Practice: Level 3 (Q9)',
      practiceLevel: 'L3',
      practiceQuestion: {
        questionNumber: 9,
        text: 'Design a pattern with first term 6 and rule add 5.\n\nDraw the first three patterns and show the count for each.',
      },
    },
  ],
};
