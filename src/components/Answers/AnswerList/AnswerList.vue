<template>
  <ul class="answers__list">
    <li
      v-for="answer in answerList"
      :key="answer.value"
      class="answers__item"
      :class="{
        _correct: answer.answer === ANSWER.CORRECT,
        _error: answer.answer === ANSWER.INCORRECT,
      }"
    >
      <span></span> {{ answer.value }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { AnswerType } from '@/types/game';
import { ANSWER } from '@/const/game';

export default defineComponent({
  props: {
    answerList: {
      type: Array as PropType<AnswerType[]>,
      required: true,
    },
  },
  setup() {
    return { ANSWER };
  },
});
</script>
