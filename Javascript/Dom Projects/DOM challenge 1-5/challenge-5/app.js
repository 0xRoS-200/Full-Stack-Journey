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

document.addEventListener('DOMContentLoaded', () => {
  const carouselTrack = document.getElementById('carouselTrack');
  const caption = document.getElementById('caption');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const carouselNav = document.getElementById('carouselNav');
  const autoPlayButton = document.getElementById('autoPlayButton');
  const timerDisplay = document.getElementById('timerDisplay');

  let currentIndex = 0;
  let autoPlayInterval = null;
  let countdownInterval = null;
  const autoPlayDelay = 5000; // 5 seconds

  // Function to update the carousel
  const updateCarousel = () => {
    // Clear the carousel track
    carouselTrack.innerHTML = '';

    // Create and append the current image
    const img = document.createElement('img');
    img.src = images[currentIndex].url;
    img.alt = images[currentIndex].caption;
    img.classList.add('carousel-slide');
    carouselTrack.appendChild(img);

    // Update the caption
    caption.textContent = images[currentIndex].caption;

    // Update the active indicator
    const indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  };

  // Function to create indicators
  const createIndicators = () => {
    carouselNav.innerHTML = ''; // Clear existing indicators
    images.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('carousel-indicator');
      indicator.addEventListener('click', () => goToImage(index));
      carouselNav.appendChild(indicator);
    });
    updateCarousel(); // Set the first indicator as active
  };

  // Function to go to a specific image
  const goToImage = (index) => {
    currentIndex = index;
    updateCarousel();
    if (autoPlayInterval) {
      resetAutoPlay(); // Reset auto-play if it's active
    }
  };

  // Function to move to the next image
  const nextImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
    if (autoPlayInterval) {
      startCountdown(); // Restart countdown only if auto-play is active
    }
  };

  // Function to move to the previous image
  const prevImage = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
    if (autoPlayInterval) {
      resetAutoPlay(); // Reset auto-play if it's active
    }
  };

  // Function to start the countdown
  const startCountdown = () => {
    let countdown = 5; // Start countdown from 5 seconds
    timerDisplay.textContent = `Next slide in ${countdown}`;

    // Clear any existing countdown interval
    if (countdownInterval) {
      clearInterval(countdownInterval);
    }

    // Start a new countdown interval
    countdownInterval = setInterval(() => {
      countdown--;
      timerDisplay.textContent = `Next slide in ${countdown}`;

      // Stop the countdown when it reaches 0
      if (countdown <= 0) {
        clearInterval(countdownInterval);
        timerDisplay.textContent = ''; // Clear the countdown text
      }
    }, 1000); // Update every second
  };

  // Function to start auto-play
  const startAutoPlay = () => {
    if (autoPlayInterval) return; // Avoid multiple intervals
    autoPlayInterval = setInterval(nextImage, autoPlayDelay);
    autoPlayButton.textContent = 'Stop Auto Play';
    startCountdown(); // Start the countdown
  };

  // Function to stop auto-play
  const stopAutoPlay = () => {
    clearInterval(autoPlayInterval);
    clearInterval(countdownInterval); // Stop the countdown
    autoPlayInterval = null;
    autoPlayButton.textContent = 'Start Auto Play';
    timerDisplay.textContent = ''; // Clear the countdown text
  };

  // Function to reset auto-play
  const resetAutoPlay = () => {
    stopAutoPlay();
    startAutoPlay();
  };

  // Toggle auto-play
  autoPlayButton.addEventListener('click', () => {
    if (autoPlayInterval) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  });

  // Add event listeners to navigation buttons
  prevButton.addEventListener('click', prevImage);
  nextButton.addEventListener('click', nextImage);

  // Initialize the carousel
  createIndicators();
  updateCarousel();
});