/**
 * Toggle the hamburger menu.
 */
export const HumbergerToggle = (() => {
  const BODY = document.body;
  const HEADER = document.getElementById('header');
  const TRIGGER = document.getElementById('toggle-trigger');

  if (!BODY || !HEADER || !TRIGGER) return;

  let scrollY = null;

  const preventScroll = () => {
    scrollY = window.scrollY;
    BODY.style.top = `-${scrollY}px`;
    BODY.classList.add('js-scroll-prevent');
  };

  const restoreScroll = () => {
    BODY.style.top = '';
    BODY.classList.remove('js-scroll-prevent');
    window.scrollTo(0, scrollY);
  };

  const handleToggleChange = ({ target }) => {
    target.checked ? preventScroll() : restoreScroll();
  };

  TRIGGER.addEventListener('change', handleToggleChange);
})();
