import { Subtopic, SubtopicId } from '../types';
import { subtopic9_1 } from './subtopic9_1';
import { subtopic9_2 } from './subtopic9_2';
import { subtopic9_3 } from './subtopic9_3';
import { subtopic9_4 } from './subtopic9_4';

export const allSubtopics: Subtopic[] = [
  subtopic9_1,
  subtopic9_2,
  subtopic9_3,
  subtopic9_4,
];

export const getSubtopicById = (id: SubtopicId): Subtopic => {
  return allSubtopics.find((s) => s.id === id) || allSubtopics[0];
};

export { subtopic9_1, subtopic9_2, subtopic9_3, subtopic9_4 };
