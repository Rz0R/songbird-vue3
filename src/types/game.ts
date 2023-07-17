import { ANSWER } from '@/const/game';
import { LANG } from '@/const/common';

export type AnswerType = {
  id: number;
  value: {
    [LANG.EN]: string;
    [LANG.RU]: string;
  };
  answer: ANSWER;
};

export type AnswerDescriptionType = {
  id: number;
  name: {
    [LANG.RU]: string;
    [LANG.EN]: string;
  };
  species: string;
  description: {
    [LANG.RU]: string;
    [LANG.EN]: string;
  };
  image: string;
  audio: {
    src: string;
    duration: number;
  };
};

export type CategoryType = { isActive: boolean; value: string };
