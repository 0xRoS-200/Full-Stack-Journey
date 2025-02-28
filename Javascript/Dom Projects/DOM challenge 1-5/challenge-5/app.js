/**
 * Image Carousel Solution
 */
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const carouselTrack = document.getElementById("carouselTrack");
  const carouselCaption = document.getElementById("caption");
  const nextButton = document.getElementById("nextButton");
  const prevButton = document.getElementById("prevButton");

  let currentIndex = 0;

  // Function to update the carousel with the current image
  const updateCarousel = () => {
    // Clear the current content
    carouselTrack.innerHTML = '';

    // Create and append the new image
    const img = document.createElement("img");
    img.setAttribute("src", images[currentIndex].url);
    img.setAttribute("class", "carousel-slide");
    carouselTrack.appendChild(img);

    // Update the caption
    carouselCaption.textContent = images[currentIndex].caption;
  };

  // Function to move to the next image
  const prevImage = () => {
    if (currentIndex === 0) {
      currentIndex = images.length - 1; // Wrap around to the last image
    } else {
      currentIndex--; // Move to the previous image
    }
    updateCarousel();
  };

  const nextImage = () => {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    updateCarousel();
  };
  // Initialize the carousel with the first image
  updateCarousel();

  // Add event listeners to the buttons
  nextButton.addEventListener("click", nextImage);
  prevButton.addEventListener("click", prevImage);
});