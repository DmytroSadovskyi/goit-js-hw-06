// Отримуємо доступ до інпута, кнопок та контейнера для боксів
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// створюємо змінні для зберігання числового значення мінімальної та максимальної кількості боксів
//  які введені в інпут
const minBoxesAmount = Number(input.min);
const maxBoxesAmount = Number(input.max);

// додаємо слухача події input. Значенням колбека буде слухач події на кнопці createBtn
input.addEventListener('input', function () {
  createBtn.addEventListener('click', createBoxes);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// колбек-функція для слухача події кнопки createBtn
function createBoxes(amount) {
  // створюємо порожній масив для подальшого додавання боксів
  const boxesArray = [];

  //  присвоюємо параметру amount поточне значення в інпуті
  amount = input.value;

  // за допомогою циклу for створюємо на кожній ітерації div(бокс), стилізуємо його
  //  і додаємо в масив boxesArray
  for (let i = 0; i < amount; i += 1) {
    if (amount <= maxBoxesAmount && amount >= minBoxesAmount) {
      const boxEl = document.createElement('div');

      boxEl.style.width = `${30 + i * 10}px`;
      boxEl.style.height = `${30 + i * 10}px`;
      boxEl.style.backgroundColor = getRandomHexColor();
      boxEl.style.marginBottom = '5px';
      boxEl.style.borderRadius = '5px';

      boxesArray.push(boxEl);
    }
  }

  // додаємо масив з боксами у контейнер
  boxesContainer.append(...boxesArray);
}

// створюємо функцію для очищення інпута та контейнера
function destroyBoxes() {
  input.value = '';
  boxesContainer.innerHTML = '';
}

//  додаємо слухача події на кнопку очищення
destroyBtn.addEventListener('click', destroyBoxes);
