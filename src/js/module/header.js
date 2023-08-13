export const ToggleHeader = (() => {
  const header = document.getElementById('header');
  let lastScrollY = 0;

  if (!header) {
    return;
  }

  const updateHeaderVisibility = () => {
    if (window.scrollY < lastScrollY || window.scrollY <= 10) {
      header.classList.remove('is-hide');
    } else {
      header.classList.add('is-hide');
    }
    lastScrollY = window.scrollY;
  }

  window.addEventListener('scroll', updateHeaderVisibility);
})();
