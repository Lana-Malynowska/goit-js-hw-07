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

const link = document.createElement("link");
link.rel = "stylesheet";
link.href =
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap";

document.head.appendChild(link);
