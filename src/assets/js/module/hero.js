/**
 * Display a random hero image when the page loads.
 */
export const RandomHero = (() => {
  window.addEventListener('load', () => {
    const imageArea = document.getElementById('hero');

    if (!imageArea) return;

    const images = [
      '/assets/img/sushiboys.png',
      '/assets/img/sushiboys_logo.png',
    ];
    const index = Math.floor(Math.random() * images.length);
    imageArea.src = images[index];
  });
})();
