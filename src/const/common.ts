import { MAX_SCORE } from '@/const/game';

export enum LANG {
  EN = 'EN',
  RU = 'RU',
}

export const TRANSLATION = {
  MAIN: {
    [LANG.EN]: 'Home',
    [LANG.RU]: 'Главная',
  },
  NEW_GAME: {
    [LANG.RU]: 'Игра',
    [LANG.EN]: 'Game',
  },
  GALLERY: {
    [LANG.RU]: 'Галерея',
    [LANG.EN]: 'Gallery',
  },
  INSTRUCTION: {
    [LANG.RU]: ['Послушайте плеер.', 'Выберите птицу из списка.'],
    [LANG.EN]: ['Listen to the player.', 'Select a bird from the list.'],
  },
  NEXT_LEVEL: {
    [LANG.RU]: 'Следующий уровень',
    [LANG.EN]: 'Next Level',
  },
  SCORE: {
    [LANG.RU]: 'Счет',
    [LANG.EN]: 'Score',
  },
  CONGRATULATIONS: {
    [LANG.RU]: 'Поздравляем!',
    [LANG.EN]: 'Congratulations!',
  },
  CONGRATULATORY_MESSAGE: {
    [LANG.RU]: `Вы прошли викторину и набрали {SCORE} из ${MAX_SCORE} возможных баллов.`,
    [LANG.EN]: `You passed the quiz and scored {SCORE} out of ${MAX_SCORE} possible points.`,
  },
  TRY_AGAIN: {
    [LANG.RU]: 'Попробовать еще раз!',
    [LANG.EN]: 'Try again!',
  },
};

export const AppRoute = {
  Main: {
    path: '/',
    name: TRANSLATION.MAIN,
  },
  Game: {
    path: '/game',
    name: TRANSLATION.NEW_GAME,
  },
  Gallery: {
    path: '/gallery',
    name: TRANSLATION.GALLERY,
  },
};
