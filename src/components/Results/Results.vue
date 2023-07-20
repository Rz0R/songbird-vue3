<template>
  <div class="game__over game-over">
    <h1 class="game-over__congratulation">
      {{ TRANSLATION.CONGRATULATIONS[currentLang] }}
    </h1>
    <p class="game-over__message">
      {{ TRANSLATION.CONGRATULATORY_MESSAGE[currentLang](score) }}
    </p>
    <MaxScore v-if="score === MAX_SCORE" />
    <button v-else class="game-over__button">
      {{ TRANSLATION.TRY_AGAIN[currentLang] }}
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import MaxScore from './MaxScore';
import { useStore } from '@/store';
import { MAX_SCORE } from '@/const/game';
import { TRANSLATION } from '@/const/common';

export default defineComponent({
  components: {
    MaxScore,
  },
  setup() {
    const store = useStore();
    const currentLang = computed(() => store.state.currentLang);
    const score = computed(() => store.state.game.score);

    return {
      currentLang,
      score,
      TRANSLATION,
      MAX_SCORE,
    };
  },
});
</script>
