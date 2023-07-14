<template>
  <div class="audio-player">
    <audio
      class="audio-player__audio"
      ref="player"
      @timeupdate="handleAudioTimeUpdate"
      @ended="handleAudioTimeEnd"
    >
      <source
        src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
        type="audio/mpeg"
      />
    </audio>
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
          <div class="audio-player__time-info-wrapper">
            <span class="audio-player__current-time">00:00</span>
            /
            <span class="audio-player__total-time">00:30</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import PlayButton from './PlayButton';
import TimeBar from './TimeBar';
import VolumeBar from './VolumeBar';

export default defineComponent({
  components: {
    PlayButton,
    TimeBar,
    VolumeBar,
  },
  setup() {
    const isPlaying = ref(false);
    const timeBarValue = ref(0);
    const volumeBarValue = ref(50);
    const isMute = ref(false);
    const player = ref<HTMLAudioElement | null>(null);

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

    return {
      player,
      isPlaying,
      timeBarValue,
      volumeBarValue,
      isMute,
      handleTogglePlayBtn,
      handleInputTimeBar,
      handleAudioTimeUpdate,
      handleAudioTimeEnd,
      handleInputVolumeBar,
      handleToggleMuteVolume,
    };
  },
});
</script>
