<template>
  <div class="header__menu menu" @click="toggleBurgerMenu">
    <button type="button" class="menu__icon icon-menu">
      <span></span>
    </button>
    <nav class="menu__body">
      <ul class="menu__list">
        <li v-for="item in appRoutes" :key="item.path">
          <router-link
            :to="item.path"
            class="menu__item"
            active-class="menu__item_active"
            exact-active-class=""
          >
            {{ item.name.EN }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { AppRoute } from '@/const/common';

export default {
  data() {
    return {
      appRoutes: AppRoute,
    };
  },
  methods: {
    toggleBurgerMenu(evt: MouseEvent) {
      const target = evt.target as HTMLElement;
      const classList = document.documentElement.classList;

      if (target.closest('.icon-menu')) {
        classList.toggle('menu-open');
        classList.toggle('lock');
      }

      if (classList.contains('menu-open') && target.closest('.menu__item')) {
        classList.remove('menu-open', 'lock');
      }
    },
  },
};
</script>
