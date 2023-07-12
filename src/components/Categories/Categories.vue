<template>
  <ul class="game__categories categories">
    <li
      v-for="(item, idx) in categories[currentLang]"
      :key="item"
      class="categories__item"
      :class="idx === gameRound ? '_active' : ''"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import { useStore } from '@/store';
import { categories } from '@/const/birdsData';

export default defineComponent({
  setup() {
    const gameRound = 0;

    const store = useStore();
    const currentLang = computed(() => store.state.currentLang);

    return {
      currentLang,
      categories,
      gameRound,
    };
  },
});
</script>
