<template>
  <ul class="home__menu menu-home">
    <li v-for="item in appRoutes" :key="item.path" class="menu-home__item">
      <router-link :to="item.path" class="menu-home__link">
        {{ item.name.EN }}
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { AppRoute } from '@/const/common';

export default {
  setup() {
    const appRoutes = { ...AppRoute };
    Reflect.deleteProperty(appRoutes, 'Main');

    return {
      appRoutes,
    };
  },
};
</script>
