<template>
  <button
    class="game__next-btn"
    :disabled="!isWin"
    @click="handleClickNextLevelButton"
  >
    {{ nextLevelText[currentLang] }}
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import { useStore } from '@/store';
import { TRANSLATION } from '@/const/common';

export default defineComponent({
  setup() {
    const nextLevelText = TRANSLATION.NEXT_LEVEL;

    const store = useStore();
    const isWin = computed(() => store.state.game.isWin);
    const currentLang = computed(() => store.state.currentLang);

    const handleClickNextLevelButton = () => {
      store.commit('game/nextRound');
    };

    return {
      isWin,
      currentLang,
      handleClickNextLevelButton,
      nextLevelText,
    };
  },
});
</script>
