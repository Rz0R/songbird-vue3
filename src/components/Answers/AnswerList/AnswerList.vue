<template>
  <ul class="answers__list">
    <li
      v-for="{ id, value, answer } in answerList"
      :key="id"
      class="answers__item"
      :class="{
        _correct: answer === ANSWER.CORRECT,
        _error: answer === ANSWER.INCORRECT,
      }"
      :data-id="id"
    >
      <span></span> {{ value }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import { ANSWER } from '@/const/game';
import { useStore } from '@/store';
import { AnswerType } from '@/types/game';

export default defineComponent({
  setup() {
    const store = useStore();
    const answerList = computed(
      () => store.getters['game/getUserAnswers'] as AnswerType[]
    );

    return { ANSWER, answerList };
  },
});
</script>
