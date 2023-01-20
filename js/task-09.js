// Пошук елемента body, кнопки зміни кольору та спану з майбутнім значенням кольору
const bodyEl = document.querySelector('body');
const colorValueText = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

//  функція створення випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// створення колбек-функції для слухача події для кнопки зміни кольору
function changeBackgroundColor() {
  const randomColor = getRandomHexColor();

  bodyEl.style.backgroundColor = randomColor;

  colorValueText.textContent = randomColor;
}

// додавання слухача події на кнопку
changeColorBtn.addEventListener('click', changeBackgroundColor);
