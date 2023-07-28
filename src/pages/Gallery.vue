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
import { computed, defineComponent, onUnmounted } from 'vue';

import AnswerDescription from '@/components/AnswerDescription';
import { useStore } from '@/store';
import useEmitter from '@/hooks/useEmitter';
import { AnswerDescriptionType } from '@/types/game';

export default defineComponent({
  components: { AnswerDescription },
  setup() {
    const emitter = useEmitter();

    const store = useStore();
    const allDescriptions = computed<AnswerDescriptionType[]>(
      () => store.getters['game/getAllDescriptions']
    );

    const handlePlayOnEmitter = (id: number) =>
      emitter.emit('stop', { exceptionId: id });

    emitter.on('play', handlePlayOnEmitter);

    onUnmounted(() => {
      emitter.off('play', handlePlayOnEmitter);
    });

    return {
      allDescriptions,
    };
  },
});
</script>
