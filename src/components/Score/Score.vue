<template>
  <h5 class="score">
    Score: <span class="score__value">{{ score }}</span>
  </h5>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const score = 0;

    return {
      score,
    };
  },
});
</script>
