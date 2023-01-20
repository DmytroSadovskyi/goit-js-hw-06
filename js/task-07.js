// Пошук інпута і спана
const fontSizeRange = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

// Додавання слухача події input
fontSizeRange.addEventListener('input', event => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
});
