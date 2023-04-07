/**
 * Lower the content by the height of the header
 */
export const HeightOfHeader = (() => {

  const heightOfHeader = () => {
    const HEADER = document.querySelector('[data-header]');
    const HEADER_HEIGHT = HEADER.clientHeight;
    const MAIN = document.querySelector('[data-main]');
    const HERO = document.querySelector('[data-hero]');

    MAIN.style.paddingBlockStart = `${HEADER_HEIGHT}px`;
    HERO != null ? HERO.style.marginBlockStart = `-${HEADER_HEIGHT}px` : 0;
  }

  document.addEventListener('DOMContentLoaded', heightOfHeader);
  window.addEventListener('resize', heightOfHeader);

})();
