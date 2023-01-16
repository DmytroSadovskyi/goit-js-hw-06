const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//  Отримуємо доступ до порожнього списку інгредієнтів
const listOfIngredients = document.querySelector("#ingredients");

// Створюємо і додаємо до списку інгредієнти на основі масиву

ingredients.map((element) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = element;
  ingredient.classList.add("item");
  listOfIngredients.append(ingredient);
});
