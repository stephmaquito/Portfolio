document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("modal");
  const lightboxImage = document.getElementById("modal-img");
  const images = document.querySelectorAll(".gallery-img");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const closeBtn = document.querySelector(".close");

  let currentIndex = 0;

  const updateArrowVisibility = () => {
    // Hide the left arrow if it's the first image
    prevBtn.style.display = currentIndex === 0 ? "none" : "block";

    // Hide the right arrow if it's the last image
    nextBtn.style.display = currentIndex === images.length - 1 ? "none" : "block";
  };

  const showLightbox = (index) => {
    lightboxImage.src = images[index].src;  // Set the lightbox image
    lightbox.classList.add("active");  // Display the modal
    currentIndex = index;

    // Update arrow visibility after showing the image
    updateArrowVisibility();
  };

  // Attach click event to images to show the lightbox
  images.forEach((image, index) => {
    image.addEventListener("click", () => showLightbox(index));
  });

  // Close the modal when the close button is clicked
  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  // Navigate to previous image
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      showLightbox(currentIndex - 1);
    }
  });

  // Navigate to next image
  nextBtn.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
      showLightbox(currentIndex + 1);
    }
  });

  // Close the modal if clicked outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });


});


function goBack() {
  window.history.back();
}




