<template>
  <div class="answers__instructions">
    <p v-for="(item, idx) in INSTRUCTION[[currentLang]]" :key="idx">
      {{ item }}
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import { useStore } from '@/store';
import { TRANSLATION } from '@/const/common';

export default defineComponent({
  setup() {
    const { INSTRUCTION } = TRANSLATION;

    const store = useStore();
    const currentLang = computed(() => store.state.currentLang);

    return {
      currentLang,
      INSTRUCTION,
    };
  },
});
</script>
