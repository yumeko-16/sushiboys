const button = document.getElementById('js-global-navigation--sp__selector');
const menu = document.getElementById('js-global-navigation--sp__menu');
const close = document.getElementById('global-navigation--sp__close');

export const GlobalNavigation = (() => {

  window.addEventListener('DOMContentLoaded', () => {

    if (!button) { return };
    button.addEventListener('click', () => {
      menu.classList.add('js-open');
    });

    if (!menu) { return };
    menu.addEventListener('click', () => {
      menu.classList.remove('js-open');
    });

    if (!close) { return };
    close.addEventListener('click', () => {
      menu.classList.remove('js-open');
    });

  });

})();
