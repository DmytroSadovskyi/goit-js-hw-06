// Отримуємо доступ до списку категорій та їх елементів
const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");

// виводимо в консоль кількість категорій
console.log("Number of categories: ", categories.children.length);

// виводимо у консоль порожній рядок(тут і далі для візуальної відповідності ТЗ)
console.log("");

// виводимо у консоль заголовки категорій та кількість елементів для кожної
items.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
  console.log("");
});
