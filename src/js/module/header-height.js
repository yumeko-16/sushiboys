/** Lower the content by the height of the header */
export const HeightOfHeader = (() => {
  const heightOfHeader = () => {
    const WRAPPER = document.getElementById('wrapper');
    const HEADER = document.getElementById('header');
    const HERO = document.getElementById('hero');

    if (!WRAPPER || !HEADER || !HERO) {
      return;
    }

    const HEADER_HEIGHT = HEADER.clientHeight;

    WRAPPER.style.paddingBlockStart = `${HEADER_HEIGHT}px`;
    HERO.style.marginBlockStart = `-${HEADER_HEIGHT}px`;
  };

  document.addEventListener('DOMContentLoaded', heightOfHeader);
  window.addEventListener('resize', heightOfHeader);
})();
