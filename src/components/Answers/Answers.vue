<template>
  <div class="answers">
    <AnswerList />
    <AnswerDescription v-if="description" :answer-description="description" />
    <AnswerInstruction v-else />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import AnswerList from './AnswerList';
import AnswerDescription from '@/components/AnswerDescription';
import AnswerInstruction from './AnswerInstruction';
import { useStore } from '@/store';
import { AnswerDescriptionType } from '@/types/game';

export default defineComponent({
  components: {
    AnswerList,
    AnswerDescription,
    AnswerInstruction,
  },
  setup() {
    const store = useStore();
    const description = computed(
      () =>
        store.getters[
          'game/getCurrentDescription'
        ] as AnswerDescriptionType | null
    );

    console.log(description);

    return {
      description,
    };
  },
});
</script>
