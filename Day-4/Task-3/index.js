document.addEventListener("DOMContentLoaded", function () {
  const carousel = new bootstrap.Carousel(
    document.getElementById("imageSlider"),
    {
      interval: 2000, // Set transition time to 2 seconds
      ride: "carousel",
    }
  );

  function goToFirst() {
    carousel.to(0);
  }

  function goToLast() {
    carousel.to(document.querySelectorAll(".carousel-item").length - 1);
  }

  document
    .querySelector(".nav-button:first-child")
    .addEventListener("click", goToFirst);
  document
    .querySelector(".nav-button:last-child")
    .addEventListener("click", goToLast);
});
