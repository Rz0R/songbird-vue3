<template>
  <h5 class="score">
    {{ TRANSLATION.SCORE[currentLang] }}:
    <span class="score__value">{{ score }}</span>
  </h5>
</template>

<script>
import { computed, defineComponent } from 'vue';

import { useStore } from '@/store';
import { TRANSLATION } from '@/const/common';

export default defineComponent({
  setup() {
    const store = useStore();
    const currentLang = computed(() => store.state.currentLang);
    const score = computed(() => store.state.game.score);

    return {
      score,
      currentLang,
      TRANSLATION,
    };
  },
});
</script>
