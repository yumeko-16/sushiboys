// ページの読み込み時にランダムなヒーロー画像を表示する機能;
export const RandomHero = (() => {
  window.addEventListener('load', () => {
    const imageArea = document.getElementById('hero');
    if (!imageArea) {
      return;
    }

    const images = ['/img/sushiboys.png', '/img/sushiboys_logo.png'];
    const index = Math.floor(Math.random() * images.length);
    imageArea.src = images[index];
  });
})();
