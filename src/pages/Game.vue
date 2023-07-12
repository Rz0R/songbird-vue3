<template>
  <main class="game">
    <div class="game__container">
      <div class="game__top">
        <Categories />
      </div>
    </div>
  </main>
</template>

<script>
import Categories from '@/components/Categories';

export default {
  components: {
    Categories,
  },
};
</script>
