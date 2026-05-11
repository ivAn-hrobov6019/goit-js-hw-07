const list = document.querySelector("#categories");

const count = list.querySelectorAll(".item").length;

console.log(`Number of categories: ${count}`);
const categories = document.querySelectorAll(".item");

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2");
  const categoryItems = category.querySelectorAll("li");
  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
});
