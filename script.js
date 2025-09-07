document.addEventListener("DOMContentLoaded", function () {
  const specialsLink = document.getElementById("specials-link");

  if (specialsLink) {
    specialsLink.addEventListener("click", function (event) {
      event.preventDefault(); // Stop default link

      // List of category pages
      const categoryPages = [
        "category1.html",
        "category2.html",
        "category3.html",
        "category4.html",
        "single-category.html"
      ];

      // Pick a random one
      const randomPage = categoryPages[Math.floor(Math.random() * categoryPages.length)];

      // Redirect to the random page
      window.location.href = randomPage;
    });
  }
});


window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
});


