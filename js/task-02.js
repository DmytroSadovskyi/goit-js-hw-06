const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//  Пошук порожнього списку інгредієнтів
const listOfIngredients = document.querySelector('#ingredients');

// Створення і додавання до списку інгредієнтів на основі масиву

ingredients.map(element => {
  const ingredient = document.createElement('li');
  ingredient.textContent = element;
  ingredient.classList.add('item');
  listOfIngredients.append(ingredient);
});
