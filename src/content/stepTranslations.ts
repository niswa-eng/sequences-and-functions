import { Language, Step, Subtopic } from '../types';
import { stepTranslations9_1 } from './stepTranslations9_1';
import { stepTranslations9_2 } from './stepTranslations9_2';
import { stepTranslations9_3 } from './stepTranslations9_3';
import { stepTranslations9_4 } from './stepTranslations9_4';
import { subtopicTranslations } from './translations';

export interface StepTranslation {
  title?: string;
  keyTerms?: string[];
  sentences?: string[];
  workedExample?: {
    problem: string;
    steps: {
      label: string;
      math?: string;
      explanation?: string;
    }[];
  };
  mistakeContent?: {
    misconception: string;
    correction: string;
    takeaway: string;
  };
  vocabList?: {
    term: string;
    meaning: string;
    example?: string;
  }[];
  practiceQuestionText?: string;
  componentProps?: Record<string, any>;
}

const allStepTranslations: Record<'id' | 'uz', Record<string, StepTranslation>> = {
  id: {
    ...stepTranslations9_1.id,
    ...stepTranslations9_2.id,
    ...stepTranslations9_3.id,
    ...stepTranslations9_4.id,
  },
  uz: {
    ...stepTranslations9_1.uz,
    ...stepTranslations9_2.uz,
    ...stepTranslations9_3.uz,
    ...stepTranslations9_4.uz,
  },
};

/**
 * Localizes a single step based on the selected language.
 * When language is 'en', the original step is returned without modifications.
 * For 'id' and 'uz', texts are translated into the native language while
 * retaining clear English keyword associations.
 */
export function localizeStep(step: Step, language: Language): Step {
  if (language === 'en') {
    return step;
  }

  const langMap = allStepTranslations[language];
  if (!langMap) return step;

  const translation = langMap[step.id];
  if (!translation) return step;

  // Clone step and overlay translated fields
  const localized: Step = {
    ...step,
    title: translation.title || step.title,
    keyTerms: translation.keyTerms || step.keyTerms,
    sentences: translation.sentences || step.sentences,
    workedExample: translation.workedExample
      ? {
          problem: translation.workedExample.problem,
          steps: translation.workedExample.steps.map((st, idx) => ({
            ...st,
            math: st.math !== undefined ? st.math : step.workedExample?.steps[idx]?.math,
          })),
        }
      : step.workedExample,
    mistakeContent: translation.mistakeContent || step.mistakeContent,
    vocabList: translation.vocabList || step.vocabList,
    practiceQuestion: step.practiceQuestion
      ? {
          ...step.practiceQuestion,
          text: translation.practiceQuestionText || step.practiceQuestion.text,
        }
      : undefined,
    componentProps: translation.componentProps
      ? {
          ...step.componentProps,
          ...translation.componentProps,
        }
      : step.componentProps,
  };

  return localized;
}

/**
 * Localizes an entire subtopic (title, fullTitle, and all steps).
 */
export function localizeSubtopic(subtopic: Subtopic, language: Language): Subtopic {
  if (language === 'en') {
    return subtopic;
  }

  const meta = subtopicTranslations[language]?.[subtopic.id];

  return {
    ...subtopic,
    title: meta?.title || subtopic.title,
    fullTitle: meta?.fullTitle || subtopic.fullTitle,
    steps: subtopic.steps.map((step) => localizeStep(step, language)),
  };
}
