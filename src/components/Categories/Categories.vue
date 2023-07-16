<template>
  <ul class="game__categories categories">
    <li
      v-for="{ value, isActive } in categories"
      :key="value"
      class="categories__item"
      :class="{ _active: isActive }"
    >
      {{ value }}
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import { useStore } from '@/store';
import { CategoryType } from '@/types/game';

export default defineComponent({
  setup() {
    const store = useStore();
    const currentLang = computed(() => store.state.currentLang);
    const categories = computed(
      () => store.getters['game/getCategories'] as CategoryType[]
    );

    return {
      currentLang,
      categories,
    };
  },
});
</script>
