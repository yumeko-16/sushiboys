const imageArea = document.querySelector('[hero-image]');
const images = ['/img/sushiboys.png', '/img/sushiboys_logo.png'];

const imageNo = Math.floor(Math.random() * images.length);
imageArea.src = images[imageNo];
