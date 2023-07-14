<template>
  <div class="question">
    <div class="question__img-ibg">
      <img :src="DEFAULT_IMG" alt="bird" />
    </div>
    <div class="question__content">
      <h3 class="question__answer">{{ DEFAULT_ANSWER }}</h3>
      <AudioPlayer
        class="question__audio-player"
        src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AudioPlayer from '@/components/AudioPlayer';
import { DEFAULT_IMG, DEFAULT_ANSWER } from '@/const/game';

export default defineComponent({
  components: {
    AudioPlayer,
  },
  setup() {
    return {
      DEFAULT_IMG,
      DEFAULT_ANSWER,
    };
  },
});
</script>
