const item = document.querySelector(".flex-card");

function itemAdded() {
item.style.display = "none";
}



const backToTopBtn = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


const addedItemBtn = document.querySelector(".add-to-card");
addedItemBtn.addEventListener("click", () => {
  myElement.style.display = "block";
  setTimeout(() => {
    myElement.style.display = "none";
  }, 5000);
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});