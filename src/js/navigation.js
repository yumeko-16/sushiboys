export const HumbergerToggle = (() => {

  window.addEventListener('DOMContentLoaded', () => {

    const html = document.querySelector('html'),
      header = document.querySelector('[data-header]'),
      toggle = document.querySelector('[data-humberger-toggle]'),
      links = document.querySelectorAll('[data-humberger-content] a'),
      close = document.querySelector('[data-navigation-close]');
    let scrollY = null;

    if (toggle === null || links === null) { return }

    toggle.addEventListener('change', (e) => {
      if (e.target.checked === true) {
        scrollY = window.pageYOffset;
        setTimeout(() => {
          html.classList.add('js-scroll-prevent');
        }, 300);
      } else {
        html.classList.remove('js-scroll-prevent');
        window.scrollTo(0, scrollY);
        scrollY = null;
        setTimeout(() => {
          header.classList.remove('js-hide');
        }, 100);
      }
    }, false);

    [...links].map((link) => {
      link.addEventListener('click', (e) => {
        if (e.target.href.includes('#')) {
          toggle.checked = false;
          html.classList.remove('js-scroll-prevent');
        } else {
          html.classList.remove('js-scroll-prevent');
        }
      }, false);
    });

    close.addEventListener('click', () => {
      toggle.checked = false;
      html.classList.remove('js-scroll-prevent');
    }, false);

  }, false);

})();
