export const ToggleHeader = (() => {
  const header = document.getElementById('header');
  let positionY = 0;

  if (!header) {
    return;
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY < positionY) {
      header.classList.remove('is-hide');
    } else {
      header.classList.add('is-hide');
    }
    positionY = window.scrollY;
    if (positionY <= 10) {
      header.classList.remove('is-hide');
    }
  });
})();
