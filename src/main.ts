import { createApp } from 'vue';
import mitt, { Emitter } from 'mitt';

import App from './App.vue';
import router from './router';
import { store, key } from './store';
import './assets/scss/style.scss';
import { Events } from '@/types/events';

const emitter: Emitter<Events> = mitt();

createApp(App)
  .use(router)
  .use(store, key)
  .provide('emitter', emitter)
  .mount('#app');
