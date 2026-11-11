document.addEventListener("DOMContentLoaded", function () {

  const carousel = document.getElementById("work-carousel");

  // Only run on the home page where the carousel exists
  if (!carousel) return;

  const slides = Array.from(
    carousel.querySelectorAll(".slide")
  );

  const dots = Array.from(
    document.querySelectorAll(".dot")
  );

  const previousButton = document.getElementById("prev-slide");
  const nextButton = document.getElementById("next-slide");

  let currentPage = 0;

  // Two images per carousel page
  const imagesPerPage = 2;

  const totalPages = Math.ceil(
    slides.length / imagesPerPage
  );

  function updateCarousel() {

    slides.forEach(function (slide, index) {

      const start = currentPage * imagesPerPage;
      const end = start + imagesPerPage;

      slide.classList.toggle(
        "visible",
        index >= start && index < end
      );

    });

    dots.forEach(function (dot, index) {

      dot.setAttribute(
        "aria-pressed",
        index === currentPage ? "true" : "false"
      );

    });

  }

  function goToPage(page) {

    currentPage = (page + totalPages) % totalPages;

    updateCarousel();

  }

  // Previous two images
  previousButton.addEventListener("click", function () {

    goToPage(currentPage - 1);

  });

  // Next two images
  nextButton.addEventListener("click", function () {

    goToPage(currentPage + 1);

  });

  // Direct navigation using the dots
  dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

      goToPage(index);

    });

  });

  // Initialize carousel
  updateCarousel();

});
