<template>
  <ul class="menu-home" :class="className">
    <li v-for="item in appRoutes" :key="item.path" class="menu-home__item">
      <router-link :to="item.path" class="menu-home__link">
        {{ item.name.EN }}
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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

    return {
      appRoutes,
    };
  },
});
</script>
