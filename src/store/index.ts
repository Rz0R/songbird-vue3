import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

import { gameModule, GameModuleState } from './gameModule';
import { LANG } from '@/const/common';
import { saveLanguage, loadSavedLanguage } from '@/utils/save';

export type State = {
  currentLang: LANG;
  game: GameModuleState;
};

export const store = createStore<State>({
  state: {
    currentLang: loadSavedLanguage(),
  } as State,
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

store.subscribe((mutation, state) => {
  mutation.type === 'toggleLang' && saveLanguage(state.currentLang);
});
