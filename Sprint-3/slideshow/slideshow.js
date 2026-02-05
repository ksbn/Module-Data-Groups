const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

const carouselImg = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward");
const autoBackBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");

let currentIndex = 0;
let autoInterval = null;

stopBtn.disabled = true;

function showImage(index) {
  carouselImg.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

forwardBtn.addEventListener("click", nextImage);
backwardBtn.addEventListener("click", prevImage);

function startAutoForward() {
  clearInterval(autoInterval);
  autoForwardBtn.disabled = true;
  autoBackBtn.disabled = true;
  stopBtn.disabled = false;
  autoInterval = setInterval(nextImage, 2000);
}

function startAutoBack() {
  clearInterval(autoInterval);
  autoForwardBtn.disabled = true;
  autoBackBtn.disabled = true;
  stopBtn.disabled = false;
  autoInterval = setInterval(prevImage, 2000);
}

function stopAuto() {
  clearInterval(autoInterval);
  autoInterval = null;
  autoForwardBtn.disabled = false;
  autoBackBtn.disabled = false;
  stopBtn.disabled = true;
}

autoForwardBtn.addEventListener("click", startAutoForward);
autoBackBtn.addEventListener("click", startAutoBack);
stopBtn.addEventListener("click", stopAuto);

showImage(currentIndex);

