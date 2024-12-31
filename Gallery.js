document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("modal");
  const lightboxImage = document.getElementById("modal-img");
  const images = document.querySelectorAll(".gallery-img");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const closeBtn = document.querySelector(".close");

  let currentIndex = 0;

  const updateArrowVisibility = () => {
    prevBtn.style.display = currentIndex === 0 ? "none" : "block";

    nextBtn.style.display = currentIndex === images.length - 1 ? "none" : "block";
  };

  const showLightbox = (index) => {
    lightboxImage.src = images[index].src;  
    lightbox.classList.add("active");  
    currentIndex = index;

    updateArrowVisibility();
  };

  //// Show images
  images.forEach((image, index) => {
    image.addEventListener("click", () => showLightbox(index));
  });

  //// Close button
  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  //// Navigate to previous image
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      showLightbox(currentIndex - 1);
    }
  });

  //// Navigate to next image
  nextBtn.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
      showLightbox(currentIndex + 1);
    }
  });

  //// Close the modal if clicked outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });


});


function goBack() {
  window.location.href = "https://stephmaquito.github.io/Portfolio/";
}




