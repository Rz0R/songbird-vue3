<template>
  <div class="question">
    <div class="question__img-ibg">
      <img :src="DEFAULT_IMG" alt="bird" />
    </div>
    <div class="question__content">
      <h3 class="question__answer">{{ DEFAULT_ANSWER }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { DEFAULT_IMG, DEFAULT_ANSWER } from '@/const/game';

export default defineComponent({
  setup() {
    return {
      DEFAULT_IMG,
      DEFAULT_ANSWER,
    };
  },
});
</script>
