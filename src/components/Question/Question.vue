<template>
  <div class="question">
    <div class="question__img-ibg">
      <img :src="image" alt="bird" />
    </div>
    <div class="question__content">
      <h3 class="question__answer">{{ answer }}</h3>
      <AudioPlayer class="question__audio-player" :src="question.audio.src" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import AudioPlayer from '@/components/AudioPlayer';
import { DEFAULT_IMG, DEFAULT_ANSWER } from '@/const/game';
import { useStore } from '@/store';
import { AnswerDescriptionType } from '@/types/game';

export default defineComponent({
  components: {
    AudioPlayer,
  },
  setup() {
    const store = useStore();
    const question = computed(
      () => store.getters['game/getQuestion'] as AnswerDescriptionType
    );

    const image = computed(() => {
      const isWin = store.state.game.isWin;
      if (isWin) {
        return question.value.image;
      } else {
        return DEFAULT_IMG;
      }
    });

    const answer = computed(() => {
      const isWin = store.state.game.isWin;
      if (isWin) {
        return question.value.name[store.state.currentLang];
      } else {
        return DEFAULT_ANSWER;
      }
    });

    return {
      question,
      image,
      answer,
    };
  },
});
</script>
