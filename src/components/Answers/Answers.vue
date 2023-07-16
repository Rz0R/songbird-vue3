<template>
  <div class="answers">
    <AnswerList :answer-list="[]" />
    <AnswerDescription v-if="false" :answer-description="birdDescriptions" />
    <AnswerInstruction />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AnswerList from './AnswerList';
import AnswerDescription from './AnswerDescription';
import AnswerInstruction from './AnswerInstruction';
import { birdsData } from '@/const/birdsData';

export default defineComponent({
  components: {
    AnswerList,
    AnswerDescription,
    AnswerInstruction,
  },
  setup() {
    const birdDescriptions = birdsData[1][3];
    return {
      birdDescriptions,
    };
  },
});
</script>
