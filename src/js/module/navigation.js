// ハンバーガーメニューのトグル機能;
export const HumbergerToggle = (() => {
  const html = document.querySelector('html');
  const header = document.getElementById('header');
  const trigger = document.getElementById('toggle-trigger');
  let scrollY = null;

  if (!header || !trigger) {
    return;
  }

  function handleToggleChange(e) {
    if (e.target.checked) {
      scrollY = window.pageYOffset;
      setTimeout(() => {
        html.classList.add('js-scroll-prevent');
      }, 300);
    } else {
      html.classList.remove('js-scroll-prevent');
      window.scrollTo(0, scrollY);
      scrollY = null;
      setTimeout(() => {
        header.classList.remove('is-hide');
      }, 100);
    }
  }

  trigger.addEventListener('change', handleToggleChange, false);
})();
