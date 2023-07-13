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
          <div class="audio-player__volume-wrapper">
            <button class="audio-player__volume-button-ibg">
              <svg height="100%" viewBox="0 0 36 36" width="100%">
                <defs>
                  <clipPath>
                    <path
                      d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"
                    ></path>
                    <path
                      d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"
                    ></path>
                    <path
                      d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"
                      transform="translate(0, 0)"
                    ></path>
                  </clipPath>
                  <clipPath>
                    <path
                      d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z"
                      transform="translate(0, 0)"
                    ></path>
                  </clipPath>
                </defs>
                <path
                  d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z"
                ></path>
              </svg>
            </button>
            <input
              type="range"
              class="audio-player__volume-bar"
              value="50"
              min="0"
              max="100"
              step="0.01"
            />
          </div>
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

export default defineComponent({
  components: {
    PlayButton,
    TimeBar,
  },
  setup() {
    const isPlaying = ref(false);
    const timeBarValue = ref(0);
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
    return {
      player,
      isPlaying,
      timeBarValue,
      handleTogglePlayBtn,
      handleInputTimeBar,
      handleAudioTimeUpdate,
      handleAudioTimeEnd,
    };
  },
});
</script>
