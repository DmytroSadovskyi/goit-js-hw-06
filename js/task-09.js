// Отримуємо доступ до body кнопки зміни кольору та спану з майбутнім значенням кольору
const bodyEl = document.querySelector('body');
const colorValueText = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();

  bodyEl.style.backgroundColor = randomColor;

  colorValueText.textContent = randomColor;
}

changeColorBtn.addEventListener('click', changeBackgroundColor);
