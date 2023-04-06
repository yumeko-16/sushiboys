'use strict';

export const ToggleHeader = (() => {

  const header = document.querySelector('[data-header]');
  let positionY = 0;

  if (header === null) { return }

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
