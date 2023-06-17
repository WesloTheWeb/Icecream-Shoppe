const carouselImageOne = 'assets/carousel-images/carousel-image-1.jpg';
const carouselImageTwo = 'assets/carousel-images/carousel-image-2.jpg';
const carouselImageThree = 'assets/carousel-images/carousel-image-3.jpg';

const carouselImages = [carouselImageOne, carouselImageTwo, carouselImageThree];

console.log(carouselImages);

// Get necessary elements
const carouselImgElement = document.getElementById("carousel-img");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentImageIndex = 0;

// Function to update the image and buttons
function updateCarousel() {
    carouselImgElement.src = carouselImages[currentImageIndex];

    prevBtn.disabled = currentImageIndex === 0;
    nextBtn.disabled = currentImageIndex === carouselImages.length - 1;
}

// Set initial image
updateCarousel();

// Set up event listeners for buttons
prevBtn.addEventListener("click", function () {
    currentImageIndex--;
    updateCarousel();
});

nextBtn.addEventListener("click", function () {
    currentImageIndex++;
    updateCarousel();
});