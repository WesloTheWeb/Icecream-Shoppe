const carouselImageOne = 'assets/carousel-images/carousel-image-1.jpg';
const carouselImageTwo = 'assets/carousel-images/carousel-image-2.jpg';
const carouselImageThree = 'assets/carousel-images/carousel-image-3.jpg';

const carouselItems = [
    {
        img: carouselImageOne,
        text: `
            Indulge in a sensory symphony that will transport you to frozen bliss. Our luscious ice cream, carefully crafted 
            and swirled into convenient buckets, promises an unforgettable journey of flavor. Each scoop is a revelation, 
            an escape from the mundane, as velvety textures dance with tantalizing tastes, and vibrant colors tantalize 
            your eyes. From the first spoonful to the last lingering lick, our ice cream unveils a medley of delectable 
            ingredients, harmoniously blended to create an epicurean masterpiece. Lose yourself in a sea of creamy decadence, 
            where dreams of dessert are scooped into reality. Dive into a bucketful of pure delight, and savor every moment of 
            this frozen euphoria.
        `
    },
    {
        img: carouselImageTwo,
        text: `
            Behold a picturesque vision that will awaken your taste buds and ignite your imagination. A velvety mound of 
            vanilla ice cream, smooth and tantalizingly creamy, sits nestled in a glistening porcelain bowl. Its pristine 
            white canvas is a testament to purity and simplicity, offering the perfect backdrop for an artful masterpiece.
        `
    },
    {
        img: carouselImageThree,
        text: `
            Prepare to be captivated by a masterful presentation of chocolate ecstasy. Three scoops of velvety, rich 
            chocolate ice cream are meticulously arranged, forming an enticing symphony of flavor and visual delight.
        `
    }
];

// Get necessary elements
const carouselImgElement = document.getElementById("carousel-img");
const carouselTextElement = document.getElementById("carousel-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// image index
let currentImageIndex = 0;

// Function to update the image and buttons
const updateCarousel = () => {
    // targets the actual html elements of src and text, and then sets it to the object key value pair
    carouselImgElement.src = carouselItems[currentImageIndex].img;
    carouselTextElement.textContent = carouselItems[currentImageIndex].text;

    prevBtn.disabled = currentImageIndex === 0;
    nextBtn.disabled = currentImageIndex === carouselItems.length - 1;
};

// Set initial image to render
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

/*NOTES 
1. Comparison Operators
comparison operations like currentImageIndex === 0 or 
currentImageIndex === carouselItems.length - 1 yield boolean values - either true or false.

The === operator tests for strict equality, meaning it checks if the operands are of the same type 
and have the same value.
So in this case, prevBtn.disabled = currentImageIndex === 0; is assigning a boolean value 
to the disabled property of the prevBtn object.

If currentImageIndex is 0, currentImageIndex === 0 will be true and so prevBtn.disabled will be set to true, 
disabling the button.

If currentImageIndex is anything other than 0, currentImageIndex === 0 will be false and so prevBtn.disabled 
will be set to false, enabling the button.

The same principle applies to nextBtn.disabled = currentImageIndex === carouselItems.length - 1;.

It's worth noting that the disabled property of a button is a boolean property, so assigning it a boolean value 
is the correct approach.


2. Also Index !== length
This used to throw me off but remember that just because array indices start at 0 DOES NOT mean length does too. Length gets
the actual number of elements in an array...

console.log('carouselItems length is', carouselItems.length) // 3

So when we 

    nextBtn.disabled = currentImageIndex === carouselItems.length - 1;

    if the index, which can only go up to 2 beacuse it counts 2, is equal to...
        carouselItems.length (3) - 1, which is 2.

        we disable the next button.


*/
