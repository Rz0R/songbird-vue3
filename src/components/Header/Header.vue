<template>
  <header class="header">
    <div class="header__container">
      <router-link to="/" class="header__logo logo"></router-link>
      <HeaderMenu class="header__menu" />
    </div>
  </header>
</template>

<script lang="ts">
import HeaderMenu from './HeaderMenu';

export default {
  components: {
    HeaderMenu,
  },
};
</script>
