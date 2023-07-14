<template>
  <div class="audio-player__volume-wrapper">
    <VolumeButton :isMute="isMute" @click="handleClickVolumeButton" />
    <input
      ref="vBar"
      type="range"
      class="audio-player__volume-bar"
      :value="value"
      @input="handleInputVBar"
      min="0"
      max="100"
      step="0.01"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, PropType, ref } from 'vue';

import VolumeButton from './VolumeButton';
import { setBarStyle } from '@/utils/common';

export default defineComponent({
  props: {
    value: {
      type: Number as PropType<number>,
      required: true,
    },
    isMute: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  },
  components: {
    VolumeButton,
  },
  setup(props, { emit }) {
    const vBar = ref<HTMLInputElement | null>(null);

    const updateBarStyle = () => vBar.value && setBarStyle(vBar.value);

    onMounted(() => updateBarStyle());

    onUpdated(() => updateBarStyle());

    const handleInputVBar = (evt: InputEvent) => {
      const input = evt.target as HTMLInputElement;
      setBarStyle(input);
      emit('input-volume-bar', +input.value);
    };

    const handleClickVolumeButton = () => emit('toggle-mute');

    return {
      vBar,
      handleInputVBar,
      handleClickVolumeButton,
    };
  },
});
</script>
