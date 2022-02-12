const button = document.getElementById('js-global-navigation--sp__selector');
const menu = document.getElementById('js-global-navigation--sp__menu');
const close = document.getElementById('global-navigation--sp__close');

document.addEventListener('DOMContentLoaded', () => {
  if (!button) {
    return false
  };
  button.addEventListener('click', () => {
    menu.classList.add('js-open');
  });
}, false);

document.addEventListener('DOMContentLoaded', () => {
  if (!menu) {
    return false
  };
  menu.addEventListener('click', () => {
    menu.classList.remove('js-open');
  });
}, false);

document.addEventListener('DOMContentLoaded', () => {
  if (!close) {
    return false
  };
  close.addEventListener('click', () => {
    menu.classList.remove('js-open');
  });
}, false);
