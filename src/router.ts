import { createRouter, createWebHistory } from 'vue-router';

import MainPage from '@/pages/Main.vue';
import GamePage from '@/pages/Game.vue';
import GalleryPage from '@/pages/Gallery.vue';
import NotFoundPage from '@/pages/NotFound.vue';
import { AppRoute } from '@/const/common';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: AppRoute.Main.path,
      name: AppRoute.Main.name.EN,
      component: MainPage,
    },
    {
      path: AppRoute.Game.path,
      name: AppRoute.Game.name.EN,
      component: GamePage,
    },
    {
      path: AppRoute.Gallery.path,
      name: AppRoute.Gallery.name.EN,
      component: GalleryPage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage,
    },
  ],
});

export default router;
