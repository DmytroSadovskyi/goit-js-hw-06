//  Отримуємо доступ до інпута та спана з текстом
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// додаємо слухача події input

nameInput.addEventListener('input', event => {
  nameOutput.textContent = event.currentTarget.value;

  if (nameOutput.textContent === '') {
    nameOutput.textContent = 'Anonymous';
  }
});
