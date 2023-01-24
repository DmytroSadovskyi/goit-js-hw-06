// Пошук форми
const form = document.querySelector('.login-form');

// Додавання слухача події submit для форми
form.addEventListener('submit', onFormSubmit);

//  Створення колбек-функції для слухача події
function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
