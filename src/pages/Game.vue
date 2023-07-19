<template>
  <main class="game">
    <div class="game__container">
      <div class="game__top">
        <Categories />
        <Score />
      </div>
      <Question class="game__question" />
      <Answers class="game__question" />
      <NextLevelButton />
    </div>
  </main>
</template>

<script>
import Categories from '@/components/Categories';
import Score from '@/components/Score';
import Question from '@/components/Question';
import Answers from '@/components/Answers';
import NextLevelButton from '@/components/NextLevelButton';

export default {
  components: {
    Categories,
    Score,
    Question,
    Answers,
    NextLevelButton,
  },
};
</script>
