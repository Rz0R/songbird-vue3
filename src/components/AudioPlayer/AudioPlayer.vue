<template>
  <div class="audio-player">
    <audio
      class="audio-player__audio"
      ref="player"
      @timeupdate="handleAudioTimeUpdate"
      @ended="handleAudioTimeEnd"
      @loadedmetadata="handleLoadMetaData"
      :src="src"
    />
    <div class="audio-player__controls">
      <PlayButton :isPlaying="isPlaying" @click="handleTogglePlayBtn" />
      <div class="audio-player__time-bar">
        <TimeBar :value="timeBarValue" @input-time-bar="handleInputTimeBar" />
        <div class="audio-player__time-info">
          <VolumeBar
            :value="volumeBarValue"
            :isMute="isMute"
            @input-volume-bar="handleInputVolumeBar"
            @toggle-mute="handleToggleMuteVolume"
          />
          <TimeInfo
            :current-time="currentTime"
            :duration="duration"
            :is-loading="isLoading"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';

import PlayButton from './PlayButton';
import TimeBar from './TimeBar';
import VolumeBar from './VolumeBar';
import TimeInfo from './TimeInfo';

export default defineComponent({
  components: {
    PlayButton,
    TimeBar,
    VolumeBar,
    TimeInfo,
  },
  props: {
    src: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const isPlaying = ref(false);
    const timeBarValue = ref(0);
    const volumeBarValue = ref(50);
    const isMute = ref(false);
    const currentTime = ref(0);
    const duration = ref(0);
    const player = ref<HTMLAudioElement | null>(null);
    const isLoading = ref(true);

    const handleLoadMetaData = (evt: Event) => {
      isLoading.value = false;
      duration.value = (evt.target as HTMLAudioElement).duration;
    };

    const handleTogglePlayBtn = () => {
      if (isPlaying.value) {
        player.value?.pause();
      } else {
        player.value?.play();
      }
      isPlaying.value = !isPlaying.value;
    };

    const handleInputTimeBar = (value: number) => {
      if (player.value) {
        const { duration } = player.value;
        player.value.currentTime = (value / 100) * duration;
      }
    };

    const handleAudioTimeUpdate = (evt: Event) => {
      const audioEl = evt.target as HTMLAudioElement;
      if (isNaN(audioEl.currentTime)) {
        timeBarValue.value = 0;
      } else {
        timeBarValue.value = (audioEl.currentTime / audioEl.duration) * 100;
        currentTime.value = audioEl.currentTime;
      }
    };

    const handleAudioTimeEnd = () => (isPlaying.value = false);

    const handleInputVolumeBar = (value: number) => {
      if (!player.value) return;
      player.value.volume = value / 100;
      volumeBarValue.value = value;
      if (value === 0 && !player.value.muted) {
        player.value.muted = true;
        isMute.value = true;
      } else if (player.value.muted) {
        player.value.muted = false;
        isMute.value = false;
      }
    };

    const unmuteVolume = () => {
      if (!player.value) return;
      player.value.muted = false;
      if (player.value.volume === 0) {
        player.value.volume = 0.5;
        volumeBarValue.value = 50;
      } else {
        volumeBarValue.value = player.value.volume * 100;
      }
      isMute.value = false;
    };

    const muteVolume = () => {
      if (!player.value) return;
      player.value.muted = true;
      isMute.value = true;
      volumeBarValue.value = 0;
    };

    const handleToggleMuteVolume = () => {
      if (!player.value) return;
      if (player.value.muted) {
        unmuteVolume();
      } else {
        muteVolume();
      }
    };

    const stop = () => {
      isPlaying.value = false;
      player.value?.pause();
    };

    watch(
      () => props.src,
      () => (isPlaying.value = false)
    );

    return {
      player,
      isPlaying,
      timeBarValue,
      volumeBarValue,
      isMute,
      currentTime,
      duration,
      isLoading,
      handleTogglePlayBtn,
      handleInputTimeBar,
      handleAudioTimeUpdate,
      handleAudioTimeEnd,
      handleInputVolumeBar,
      handleToggleMuteVolume,
      handleLoadMetaData,
      stop,
    };
  },
});
</script>
