import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

import { LANG } from '@/const/common';

type State = {
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
  modules: {},
});

export const key: InjectionKey<Store<State>> = Symbol();

export const useStore = () => {
  return baseUseStore(key);
};
