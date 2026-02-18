const els = {};
let lastScrollY = window.scrollY;

const cacheElements = () => {
  els.header = document.getElementById('header');
};

const updateHeaderVisibility = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < lastScrollY || currentScrollY <= 10) {
    els.header.classList.remove('is-hide');
  } else {
    els.header.classList.add('is-hide');
  }

  lastScrollY = currentScrollY;
};

const init = () => {
  cacheElements();
  if (!els.header) return;

  updateHeaderVisibility();
  window.addEventListener('scroll', updateHeaderVisibility, { passive: true });
};

export default { init };
