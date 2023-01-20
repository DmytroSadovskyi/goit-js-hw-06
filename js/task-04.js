// створення змінної для зберігання поточного значення лічильника
let counterValue = 0;

// пошук кнопок зменшення та збільшення значення лічильника, а також  самого лічильника
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

// написання колбек-функції для слухачів кнопок

function onDecrementButtonClick() {
  counterValue -= 1;
  counter.textContent = counterValue;
  console.log(counterValue);
}

function onIncrementButtonClick() {
  counterValue += 1;
  counter.textContent = counterValue;
  console.log(counterValue);
}

//  додавання слухачів до кнопок
decrementBtn.addEventListener('click', onDecrementButtonClick);
incrementBtn.addEventListener('click', onIncrementButtonClick);
