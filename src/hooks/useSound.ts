import { onMounted, onUnmounted, ref } from 'vue';

export const useSound = (url: string) => {
  const audio = ref<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (audio.value) {
      audio.value.currentTime = 0;
      audio.value.play();
    }
  };

  onMounted(() => {
    audio.value = new Audio(url);
    audio.value.volume = 0.5;
  });

  onUnmounted(() => {
    if (audio.value) {
      audio.value.pause();
      audio.value = null;
    }
  });

  return [playSound];
};
