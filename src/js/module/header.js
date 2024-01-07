export const ToggleHeader = (() => {
  const updateHeaderVisibility = () => {
    const HEADER = document.getElementById('header');
    let lastScrollY = 0;

    if (!HEADER) {
      return;
    }

    if (window.scrollY < lastScrollY || window.scrollY <= 10) {
      HEADER.classList.remove('is-hide');
    } else {
      HEADER.classList.add('is-hide');
    }
    lastScrollY = window.scrollY;
  };

  window.addEventListener('scroll', updateHeaderVisibility);
})();
