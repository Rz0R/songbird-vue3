<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss"></style>
