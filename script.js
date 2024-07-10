document.addEventListener("DOMContentLoaded", function() {
  const categoriesButton = document.querySelector(".but1 button");
  const searchInput = document.querySelector(".search input");
  const searchButton = document.querySelector("#mg button");
  const cartButton = document.querySelector(".but4 button");
  const modeHeading = document.querySelector(".mod p");
  const giftHeading = document.querySelector("#gift-ideas");
  const customerServiceHeading = document.querySelector("#customer-service");
  const contactUsSection = document.querySelector("#contact-us");

  let isBlackAndWhite = false;

  categoriesButton.addEventListener("click", () => {
      alert("Categories dropdown clicked!");
  });

  searchButton.addEventListener("click", () => {
      alert(`Searching for: ${searchInput.value}`);
  });

  cartButton.addEventListener("click", () => {
      alert("Cart button clicked!");
  });

  modeHeading.addEventListener("click", () => {
      isBlackAndWhite = !isBlackAndWhite;
      document.body.classList.toggle("black-and-white", isBlackAndWhite);
  });

  giftHeading.addEventListener("click", () => {
      document.getElementById("jewellery").scrollIntoView({ behavior: "smooth" });
  });

  customerServiceHeading.addEventListener("click", () => {
      contactUsSection.classList.toggle("hidden");
  });
});