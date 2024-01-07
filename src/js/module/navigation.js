/** Toggle the hamburger menu. */
export const HumbergerToggle = (() => {
  const HTML = document.querySelector('html');
  const HEADER = document.getElementById('header');
  const TRIGGER = document.getElementById('toggle-trigger');
  let scrollY = null;

  if (!HEADER || !TRIGGER) {
    return;
  }

  function handleToggleChange(e) {
    if (e.target.checked) {
      scrollY = window.pageYOffset;
      setTimeout(() => {
        HTML.classList.add('js-scroll-prevent');
      }, 300);
    } else {
      HTML.classList.remove('js-scroll-prevent');
      window.scrollTo(0, scrollY);
      scrollY = null;
      setTimeout(() => {
        HEADER.classList.remove('is-hide');
      }, 100);
    }
  }

  TRIGGER.addEventListener('change', handleToggleChange, false);
})();
