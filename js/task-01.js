// пошук списку категорій та їх елементів
const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");

// виведення в консоль кількості категорій
console.log("Number of categories: ", categories.children.length);

// виведення у консоль порожнього рядка(тут і далі для візуальної відповідності ТЗ)
console.log("");

// виведення у консоль заголовків категорій та кількості елементів для кожної
items.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
  console.log("");
});
