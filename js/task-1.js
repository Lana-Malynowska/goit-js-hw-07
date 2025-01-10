const categories = document.querySelectorAll(".item");

function countCategories() {
  console.log(`Number of categories: ${categories.length}`);
}

function getCategories() {
  categories.forEach((category) => {
    console.log(`Category: ${category.querySelector("h2").textContent}`);
    console.log(`Elements: ${category.querySelectorAll("li").length}`);
  });
}
countCategories();
getCategories();
