export const Navigation = (() => {

  const humberger = document.querySelector('[data-humberger]');
  const navigation = document.querySelector('[data-navigation]');
  const close = document.querySelector('[data-navigation-close]');

  window.addEventListener('DOMContentLoaded', () => {

    humberger.addEventListener('click', () => {
      humberger.classList.add('js-hide');
      navigation.classList.add('js-open');
    });

    close.addEventListener('click', () => {
      humberger.classList.remove('js-hide');
      navigation.classList.remove('js-open');
    });

  });

})();
