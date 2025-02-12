/**
 * Lower the content by the height of the header
 */
export const HeightOfHeader = (() => {
  const heightOfHeader = () => {
    const HEADER = document.getElementById('header');
    const TARGET = document.querySelector('[data-header-height-target]');

    if (!HEADER || !TARGET) return;

    const HEADER_HEIGHT = HEADER.clientHeight;
    TARGET.style.marginTop = `-${HEADER_HEIGHT}px`;
  };

  document.addEventListener('DOMContentLoaded', heightOfHeader);
  window.addEventListener('resize', heightOfHeader);
})();
