import { SAVE_LANG_KEY, LANG } from '@/const/common';

export const saveLanguage = (language: LANG) => {
  localStorage.setItem(SAVE_LANG_KEY, language);
};

export const loadSavedLanguage = (): LANG => {
  if (localStorage.getItem(SAVE_LANG_KEY) !== null) {
    return localStorage.getItem(SAVE_LANG_KEY) as LANG;
  }

  saveLanguage(LANG.RU);
  return LANG.RU;
};
