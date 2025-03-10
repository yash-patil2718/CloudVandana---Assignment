// Array of image URLs
const images = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e"
];


let currentIndex = 0; 

const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage() {
    sliderImage.src = images[currentIndex];
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop forward
    updateImage();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop backward
    updateImage();
});

updateImage();
