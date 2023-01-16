//  Отримуємо доступ до інпута
const inputForValidation = document.querySelector('#validation-input');

// створюємо дві змінні для зберігання числового значення необхідної кількості символів і введеної
const currentValue = inputForValidation.value.length;
const requiredValue = Number(inputForValidation.dataset.length);

// пишемо колбек-функцію для слухача події blur
function onInputBlur() {
  // створюємо дві змінні для зберігання числового значення необхідної кількості символів і введеної
  const currentValue = inputForValidation.value.length;
  const requiredValue = Number(inputForValidation.dataset.length);

  if (currentValue !== requiredValue) {
    inputForValidation.classList.add('invalid');
  } else {
    inputForValidation.classList.replace('invalid', 'valid');
  }
}

// додаємо слухача події blur(втрати фокусу) для інпута
inputForValidation.addEventListener('blur', onInputBlur);
