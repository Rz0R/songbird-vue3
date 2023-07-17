import { Module } from 'vuex';

import { State as RootState } from './index';
import { birdsData, categories } from '@/const/birdsData';
import { AnswerDescriptionType, AnswerType, CategoryType } from '@/types/game';
import { getRandomInt } from '@/utils/common';
import { ANSWER } from '@/const/game';

type GameModuleState = {
  round: number;
  isWin: boolean;
  userAnswers: AnswerType[] | null;
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
    getUserAnswers: (state, getters, rootState) => {
      if (state.userAnswers === null) {
        state.userAnswers = birdsData[state.round].map(({ id, name }) => ({
          id,
          value: name[rootState.currentLang],
          answer: ANSWER.NO_ANSWER,
        }));
      }
      return state.userAnswers;
    },
  },
  mutations: {},
  namespaced: true,
};
