import { Module } from 'vuex';
import { State as RootState } from './index';

import { categories } from '@/const/birdsData';
import { AnswerType, AnswerDescriptionType, CategoryType } from '@/types/game';

type GameModuleState = {
  round: number;
  isWin: boolean;
  userAnswers: AnswerType | null;
  currentQuestion: AnswerDescriptionType | null;
  score: number;
  maxRoundPoints: number;
  penaltyPoints: number;
};

export const gameModule: Module<GameModuleState, RootState> = {
  state: () => ({
    round: 0,
    isWin: false,
    userAnswers: null,
    currentQuestion: null,
    score: 0,
    maxRoundPoints: 5,
    penaltyPoints: 0,
  }),
  getters: {
    getCategories: (state, getters, rootState): CategoryType[] => {
      const currentLang = rootState.currentLang;
      return categories[currentLang].map((category, idx) => ({
        value: category,
        isActive: idx === state.round,
      }));
    },
  },
  namespaced: true,
};
