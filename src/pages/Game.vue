<template>
  <main class="game">
    <div v-if="!isGameOver" class="game__container">
      <div class="game__top">
        <Categories />
        <Score />
      </div>
      <Question class="game__question" />
      <Answers class="game__question" />
      <NextLevelButton />
    </div>
    <div v-else class="game__container">
      <Results />
    </div>
  </main>
</template>

<script>
import { defineComponent, computed } from 'vue';

import Categories from '@/components/Categories';
import Score from '@/components/Score';
import Question from '@/components/Question';
import Answers from '@/components/Answers';
import NextLevelButton from '@/components/NextLevelButton';
import Results from '@/components/Results';
import { useStore } from '@/store';

export default defineComponent({
  components: {
    Categories,
    Score,
    Question,
    Answers,
    NextLevelButton,
    Results,
  },
  setup() {
    const store = useStore();
    const isGameOver = computed(() => store.state.game.isGameOver);

    return {
      isGameOver,
    };
  },
});
</script>
