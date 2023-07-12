<template>
  <div class="menu" @click="toggleBurgerMenu">
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
            {{ item.name[currentLang] }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import { AppRoute } from '@/const/common';
import { useStore } from '@/store';

export default defineComponent({
  setup() {
    const toggleBurgerMenu = (evt: MouseEvent) => {
      const target = evt.target as HTMLElement;
      const classList = document.documentElement.classList;

      if (target.closest('.icon-menu')) {
        classList.toggle('menu-open');
        classList.toggle('lock');
      }

      if (classList.contains('menu-open') && target.closest('.menu__item')) {
        classList.remove('menu-open', 'lock');
      }
    };

    const store = useStore();
    const currentLang = computed(() => store.state.currentLang);

    return { appRoutes: AppRoute, toggleBurgerMenu, currentLang };
  },
});
</script>
