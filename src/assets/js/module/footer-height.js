/**
 * Raise content by footer height
 */
export const HeightOfFooter = (() => {
  const heightOfFooter = () => {
    const WRAPPER = document.querySelector('[data-wrapper]');
    const FOOTER = document.querySelector('[data-footer]');
    const FOOTER_HEIGHT = FOOTER.clientHeight;

    WRAPPER != null ? (WRAPPER.style.paddingBottom = `${FOOTER_HEIGHT}px`) : 0;
  };

  document.addEventListener('DOMContentLoaded', heightOfFooter);
  window.addEventListener('resize', heightOfFooter);
})();
