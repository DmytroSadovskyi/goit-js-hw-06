//  Пошук інпута
const inputForValidation = document.querySelector('#validation-input');

// створення колбек-функції для слухача події blur
function onInputBlur() {
  // створення двох змінних для зберігання числового значення необхідної кількості символів і введеної
  const currentValue = inputForValidation.value.length;
  const requiredValue = Number(inputForValidation.dataset.length);

  if (currentValue !== requiredValue) {
    inputForValidation.classList.add('invalid');
  } else {
    inputForValidation.classList.replace('invalid', 'valid');
  }
}

// додавання слухача події blur(втрати фокусу) для інпута
inputForValidation.addEventListener('blur', onInputBlur);
