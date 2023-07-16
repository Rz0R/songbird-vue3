<template>
  <div class="answers">
    <AnswerList :answer-list="[]" />
    <AnswerDescription :answer-description="birdDescriptions" />
    <!-- <div class="answers__instructions">
      <p>Послушайте плеер.</p>
      <p>Выберите птицу из списка</p>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AnswerList from './AnswerList';
import AnswerDescription from './AnswerDescription';
import { birdsData } from '@/const/birdsData';

export default defineComponent({
  components: {
    AnswerList,
    AnswerDescription,
  },
  setup() {
    const birdDescriptions = birdsData[1][3];
    return {
      birdDescriptions,
    };
  },
});
</script>
