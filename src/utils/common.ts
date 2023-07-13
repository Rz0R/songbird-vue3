export const setBarStyle = (input: HTMLInputElement) => {
  const { value } = input;
  input.style.background = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${value}%, rgb(115, 115, 115) ${value}%, rgb(115, 115, 115) ${value}%)`;
};
