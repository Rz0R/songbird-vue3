import { ANSWER } from '@/const/game';

export type AnswerType = {
  value: string;
  answer: keyof typeof ANSWER;
};
