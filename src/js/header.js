export const ToggleHeader = (() => {

  window.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('[data-header]');
    let positionY = 0;

    if (header === null) { return }

    window.addEventListener('scroll', () => {

      if (window.scrollY < positionY) {
        header.classList.remove('js-hide');
      } else {
        header.classList.add('js-hide');
      }
      positionY = window.scrollY;
      if (positionY <= 10) {
        header.classList.remove('js-hide');
      }

    });

  });

})();
