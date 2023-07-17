export const setBarStyle = (input: HTMLInputElement) => {
  const { value } = input;
  input.style.background = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${value}%, rgb(115, 115, 115) ${value}%, rgb(115, 115, 115) ${value}%)`;
};

export const formatTime = (number: number): string => {
  const minutes = Math.floor((number / 60) % 60)
    .toString()
    .padStart(2, '0');

  const seconds = Math.floor(number % 60)
    .toString()
    .padStart(2, '0');

  return `${minutes}:${seconds}`;
};

export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
