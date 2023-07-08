import { createRouter, createWebHistory } from 'vue-router';

import MainPage from '@/pages/Main.vue';
import GamePage from '@/pages/Game.vue';
import GalleryPage from '@/pages/Gallery.vue';
import NotFoundPage from '@/pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
    },
    {
      path: '/game',
      name: 'game',
      component: GamePage,
    },
    {
      path: '/gallery',
      name: 'gallery',
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
