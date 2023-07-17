import { Module } from 'vuex';

import { State as RootState } from './index';
import { birdsData, categories } from '@/const/birdsData';
import { AnswerDescriptionType, AnswerType, CategoryType } from '@/types/game';
import { getRandomInt } from '@/utils/common';
import { ANSWER } from '@/const/game';

const updateUserAnswers = (items: AnswerType[], update: AnswerType) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [...items.slice(0, index), update, ...items.slice(index + 1)];
};

export type GameModuleState = {
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
    getQuestion: (state): AnswerDescriptionType => {
      if (state.currentQuestion === null) {
        const questionIdx = getRandomInt(0, birdsData[state.round].length - 1);
        state.currentQuestion = birdsData[state.round][questionIdx];
      }
      return state.currentQuestion;
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
  mutations: {
    updateUserAnswers: (state, id: number) => {
      if (state.isWin) return;
      if (state.userAnswers === null) return;

      let userAnswer = state.userAnswers.find((answer) => answer.id === id);
      if (!userAnswer) return;

      const currentQuestionId = state.currentQuestion?.id;
      if (!currentQuestionId) return;

      if (userAnswer.answer === ANSWER.INCORRECT) return;

      userAnswer = {
        ...userAnswer,
        answer: id === currentQuestionId ? ANSWER.CORRECT : ANSWER.INCORRECT,
      };

      if (userAnswer.answer === ANSWER.CORRECT) {
        state.score = state.score + state.maxRoundPoints - state.penaltyPoints;
        state.isWin = true;
      }
      if (userAnswer.answer === ANSWER.INCORRECT) state.penaltyPoints++;

      state.userAnswers = updateUserAnswers(state.userAnswers, userAnswer);
    },
  },
  namespaced: true,
};
