let currentIndex = 0;
const images = ["images/images1.png", "images/images2.jpg", "images/images3.jpg"]; // Ganti dengan nama file gambarmu

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("slider-img").src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("slider-img").src = images[currentIndex];
}

function toggleFunction() {
    const toggle = document.getElementById("toggle");
    const status = document.getElementById("toggle-status");
    status.textContent = toggle.checked ? "On" : "Off";
}
