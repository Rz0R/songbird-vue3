<template>
  <div class="game__answers answers">
    <ul class="answers__list">
      <li class="answers__item _correct"><span></span> Ворон</li>
      <li class="answers__item _error"><span></span> Журавль</li>
      <li class="answers__item"><span></span> Ласточка</li>
      <li class="answers__item"><span></span> Козодой</li>
      <li class="answers__item"><span></span> Кукушка</li>
      <li class="answers__item"><span></span> Синица</li>
    </ul>

    <div class="answers__description">
      <div class="answers__question question question_with-description">
        <div class="question__img-ibg">
          <img src="@/assets/img/default-image.jpg" alt="bird" />
        </div>
        <div class="question__content">
          <h3 class="question__answer">Дятел</h3>
          <h5 class="question__science-name">Dendrocopos major</h5>
          <AudioPlayer
            src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
          />
        </div>
        <p class="question__description">
          Дятел – заметная и шумная птица, часто живет рядом с человеком. С
          середины января до конца июня можно услышать «барабанную дробь» дятлов
          – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую
          погоду дробь слышна в радиусе 1,5 км.
        </p>
      </div>
    </div>
    <!-- <div class="answers__instructions">
      <p>Послушайте плеер.</p>
      <p>Выберите птицу из списка</p>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AudioPlayer from '@/components/AudioPlayer';

export default defineComponent({
  components: {
    AudioPlayer,
  },
  setup() {
    return {};
  },
});
</script>
