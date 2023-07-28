<template>
  <div class="audio-player" :data-player-id="id">
    <audio
      class="audio-player__audio"
      ref="player"
      @timeupdate="handleAudioTimeUpdate"
      @ended="handleAudioTimeEnd"
      @loadedmetadata="handleLoadMetaData"
      :src="src"
    />
    <div class="audio-player__controls">
      <PlayButton
        :isPlaying="isPlaying"
        :isLoading="isLoading"
        @click="handleTogglePlayBtn"
      />
      <div class="audio-player__time-bar">
        <TimeBar
          :value="timeBarValue"
          @input-time-bar="handleInputTimeBar"
          :isLoading="isLoading"
        />
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
import { defineComponent, onUnmounted, PropType, ref, watch } from 'vue';

import PlayButton from './PlayButton';
import TimeBar from './TimeBar';
import VolumeBar from './VolumeBar';
import TimeInfo from './TimeInfo';
import useEmitter from '@/hooks/useEmitter';

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
    id: {
      type: Number as PropType<number>,
      default: -1,
    },
  },
  setup(props) {
    const emitter = useEmitter();
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

    const pause = () => {
      if (isPlaying.value) {
        isPlaying.value = false;
        player.value?.pause();
      }
    };

    const play = async () => {
      try {
        await player.value?.play();
        isPlaying.value = true;
        emitter.emit('play', props.id);
      } catch (err) {
        console.error(err);
      }
    };

    const handleTogglePlayBtn = async () => {
      if (isPlaying.value) {
        pause();
      } else {
        await play();
      }
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

    const handleStopOnEmitter = ({ exceptionId }: { exceptionId: number }) => {
      if (exceptionId !== -1 && exceptionId !== props.id) pause();
    };

    emitter.on('stop', handleStopOnEmitter);

    watch(
      () => props.src,
      () => {
        isPlaying.value = false;
        isLoading.value = true;
        duration.value = 0;
        player.value?.load();
      }
    );

    onUnmounted(() => {
      emitter.off('stop', handleStopOnEmitter);
    });

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
      pause,
    };
  },
});
</script>
