<template>
  <main class="game">
    <div class="game__container">
      <div class="game__top">
        <Categories />
        <Score />
      </div>
    </div>
  </main>
</template>

<script>
import Categories from '@/components/Categories';
import Score from '@/components/Score';

export default {
  components: {
    Categories,
    Score,
  },
};
</script>
