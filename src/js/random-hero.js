const imageArea = document.getElementById('js-hero__image');
const images = ['/img/sushiboys.png', '/img/sushiboys_logo.png'];

const imageNo = Math.floor(Math.random() * images.length);
imageArea.src = images[imageNo];
