<template>
  <div class="audio-player__time-info-wrapper">
    <span class="audio-player__current-time">{{ formattedCurrentTime }}</span>
    /
    <span class="audio-player__total-time">{{ formattedDuration }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';

import { formatTime } from '@/utils/common';

export default defineComponent({
  props: {
    currentTime: {
      type: Number as PropType<number>,
      required: true,
    },
    duration: {
      type: Number as PropType<number>,
      default: 0,
    },
    isLoading: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  },
  setup(props) {
    const loadingTime = '--:--';

    const formattedCurrentTime = ref<string>(loadingTime);
    const formattedDuration = ref<string>(loadingTime);

    watch(
      () => props.isLoading,
      (newValue) => {
        if (!newValue) {
          formattedCurrentTime.value = formatTime(props.currentTime);
          formattedDuration.value = formatTime(props.duration);
        } else {
          formattedCurrentTime.value = loadingTime;
          formattedDuration.value = loadingTime;
        }
      }
    );

    watch(
      () => props.currentTime,
      (value) => (formattedCurrentTime.value = formatTime(value))
    );

    return {
      formattedCurrentTime,
      formattedDuration,
    };
  },
});
</script>
