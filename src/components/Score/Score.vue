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
    const score = 0;

    const store = useStore();
    const currentLang = computed(() => store.state.currentLang);

    return {
      score,
      currentLang,
      TRANSLATION,
    };
  },
});
</script>
