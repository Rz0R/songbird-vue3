<template>
  <ul class="menu-home" :class="className">
    <li v-for="item in appRoutes" :key="item.path" class="menu-home__item">
      <router-link :to="item.path" class="menu-home__link">
        {{ item.name[currentLang] }}
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import { useStore } from '@/store';
import { AppRoute } from '@/const/common';

export default defineComponent({
  props: {
    className: {
      type: String,
    },
  },
  setup() {
    const appRoutes = { ...AppRoute };
    Reflect.deleteProperty(appRoutes, 'Main');

    const store = useStore();
    const currentLang = computed(() => store.state.currentLang);

    return {
      appRoutes,
      currentLang,
    };
  },
});
</script>
