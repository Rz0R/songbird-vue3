<template>
  <input
    ref="pbBar"
    @input="handleInputPBar"
    :disabled="isLoading"
    type="range"
    class="audio-player__time"
    :value="isNaN(value) ? 0 : value"
    min="0"
    max="100"
    step="0.01"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onUpdated, onMounted } from 'vue';

import { setBarStyle } from '@/utils/common';

export default defineComponent({
  props: {
    value: {
      type: Number as PropType<number>,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  setup(_props, { emit }) {
    const pbBar = ref<HTMLInputElement | null>(null);

    const updateBarStyle = () => pbBar.value && setBarStyle(pbBar.value);

    onMounted(() => updateBarStyle());

    onUpdated(() => updateBarStyle());

    const handleInputPBar = (evt: InputEvent) => {
      const input = evt.target as HTMLInputElement;
      setBarStyle(input);
      emit('input-time-bar', +input.value);
    };

    return {
      pbBar,
      handleInputPBar,
    };
  },
});
</script>
