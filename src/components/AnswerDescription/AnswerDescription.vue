<template>
  <div class="answers__description">
    <div class="answers__question question question_with-description">
      <div class="question__img-ibg">
        <img
          :src="answerDescription.image"
          :alt="answerDescription.name[currentLang]"
        />
      </div>
      <div class="question__content">
        <h3 class="question__answer">
          {{ answerDescription.name[currentLang] }}
        </h3>
        <h5 class="question__science-name">{{ answerDescription.species }}</h5>
        <AudioPlayer :src="answerDescription.audio.src" />
      </div>
      <p class="question__description">
        {{ answerDescription.description[currentLang] }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

import AudioPlayer from '@/components/AudioPlayer/AudioPlayer.vue';
import { AnswerDescriptionType } from '@/types/game';
import { useStore } from '@/store';

export default defineComponent({
  props: {
    answerDescription: {
      type: Object as PropType<AnswerDescriptionType>,
      required: true,
    },
  },
  components: {
    AudioPlayer,
  },
  setup() {
    const store = useStore();
    const currentLang = computed(() => store.state.currentLang);

    return {
      currentLang,
    };
  },
});
</script>
