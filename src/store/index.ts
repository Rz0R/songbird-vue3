import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

import { gameModule } from './gameModule';
import { LANG } from '@/const/common';

export type State = {
  currentLang: LANG;
};

export const store = createStore<State>({
  state: {
    currentLang: LANG.EN,
  },
  getters: {},
  mutations: {
    toggleLang: (state) => {
      if (state.currentLang === LANG.EN) {
        state.currentLang = LANG.RU;
      } else {
        state.currentLang = LANG.EN;
      }
    },
  },
  actions: {},
  modules: {
    game: gameModule,
  },
});

export const key: InjectionKey<Store<State>> = Symbol();

export const useStore = () => {
  return baseUseStore(key);
};
