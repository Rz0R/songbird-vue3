<template>
  <main class="game">
    <div class="game__container">
      <div class="game__top">
        <Categories />
        <Score />
      </div>
      <Question />
    </div>
  </main>
</template>

<script>
import Categories from '@/components/Categories';
import Score from '@/components/Score';
import Question from '@/components/Question';

export default {
  components: {
    Categories,
    Score,
    Question,
  },
};
</script>
