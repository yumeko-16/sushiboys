/**
 * Toggle the hamburger menu.
 */
export const HumbergerToggle = (() => {
  const BODY = document.body;
  const HEADER = document.getElementById('header');
  const TRIGGER = document.getElementById('toggle-trigger');

  if (!BODY || !HEADER || !TRIGGER) return;

  let scrollY = null;

  const handleToggleChange = (e) => {
    if (e.target.checked) {
      scrollY = window.scrollY;
      setTimeout(() => {
        BODY.classList.add('js-scroll-prevent');
      }, 300);
    } else {
      BODY.classList.remove('js-scroll-prevent');
      window.scrollTo(0, scrollY);
      scrollY = null;
      setTimeout(() => {
        HEADER.classList.remove('is-hide');
      }, 100);
    }
  };

  TRIGGER.addEventListener('change', handleToggleChange);
})();
