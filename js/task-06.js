//  Пошук інпута
const inputForValidation = document.querySelector('#validation-input');

// створення колбек-функції для слухача події blur
function onInputBlur() {
  // створення двох змінних для зберігання числового значення необхідної кількості символів і введеної
  const currentValue = inputForValidation.value.length;
  const requiredValue = Number(inputForValidation.dataset.length);

  if (currentValue !== requiredValue) {
    // додавання класу, якщо значення не валідне
    inputForValidation.classList.add('invalid');
    //  якщо клас для валідного значення вже є, то прибираємо його
    if (inputForValidation.classList.contains('valid')) {
      inputForValidation.classList.remove('valid');
    }
  } else {
    //  якщо клас для не валідного значення вже є, то прибираємо його
    if (inputForValidation.classList.contains('invalid')) {
      inputForValidation.classList.remove('invalid');
    }
    // встановлюємо клас для валідного значення
    inputForValidation.classList.add('valid');
  }
}

// додавання слухача події blur(втрати фокусу) для інпута
inputForValidation.addEventListener('blur', onInputBlur);
