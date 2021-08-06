const button = document.getElementById('js-global-navigation--sp__selector');
const menu = document.getElementById('js-global-navigation--sp__menu');
const close = document.getElementById('global-navigation--sp__close');

button.addEventListener('click', () => {
  menu.classList.add('js-open');
});

menu.addEventListener('click', () => {
  menu.classList.remove('js-open');
});

close.addEventListener('click', () => {
  menu.classList.remove('js-open');
});
