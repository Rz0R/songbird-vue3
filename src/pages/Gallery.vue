<template>
  <main class="gallery">
    <div class="gallery__container">
      <AnswerDescription
        v-for="description in allDescriptions"
        :key="description.id"
        :answer-description="description"
      />
    </div>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import AnswerDescription from '@/components/AnswerDescription';
import { useStore } from '@/store';
import { AnswerDescriptionType } from '@/types/game';

export default defineComponent({
  components: { AnswerDescription },
  setup() {
    const store = useStore();
    const allDescriptions = computed<AnswerDescriptionType[]>(
      () => store.getters['game/getAllDescriptions']
    );

    return {
      allDescriptions,
    };
  },
});
</script>
