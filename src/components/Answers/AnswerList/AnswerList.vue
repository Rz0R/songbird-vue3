<template>
  <ul class="answers__list" @click="handleUserAnswer">
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
      <span></span> {{ value[currentLang] }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue';

import { ANSWER } from '@/const/game';
import { useStore } from '@/store';
import { useSound } from '@/hooks/useSound';
import { AnswerType } from '@/types/game';

export default defineComponent({
  setup() {
    const wrongSoundUrl = require('@/assets/audio/wrong-answer.mp3');
    const rightSoundUrl = require('@/assets/audio/right-answer.mp3');

    const [playWrongSound] = useSound(wrongSoundUrl);
    const [playRightSound] = useSound(rightSoundUrl);

    const store = useStore();
    const answerList = computed(
      () => store.getters['game/getUserAnswers'] as AnswerType[]
    );

    const currentLang = computed(() => store.state.currentLang);

    const handleUserAnswer = (evt: MouseEvent) => {
      const target = evt.target as HTMLElement;
      const id = Number(target.dataset.id);

      store.commit('game/updateUserAnswers', id);
    };

    const handlePenaltyPointsChange = (value: number) =>
      value > 0 && playWrongSound();
    const handleIsWinChange = (value: boolean) => value && playRightSound();

    watch(() => store.state.game.penaltyPoints, handlePenaltyPointsChange);
    watch(() => store.state.game.isWin, handleIsWinChange);

    return { currentLang, ANSWER, answerList, handleUserAnswer };
  },
});
</script>
