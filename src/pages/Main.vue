<template>
  <main class="home">
    <div class="home__container">
      <MainMenu class="home__menu" />
    </div>
  </main>
</template>

<script lang="ts">
import MainMenu from '@/components/MainMenu';

export default {
  components: {
    MainMenu,
  },
};
</script>
