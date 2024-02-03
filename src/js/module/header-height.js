/** Lower the content by the height of the header */
export const HeightOfHeader = (() => {
  const heightOfHeader = () => {
    const WRAPPER = document.getElementById('wrapper');
    const HEADER = document.getElementById('header');
    const HEADER_HEIGHT = HEADER.clientHeight;
    const HERO = document.getElementById('hero');
    console.log(HERO);

    WRAPPER.style.paddingBlockStart = `${HEADER_HEIGHT}px`;
    HERO != null ? (HERO.style.marginBlockStart = `-${HEADER_HEIGHT}px`) : 0;
  };

  document.addEventListener('DOMContentLoaded', heightOfHeader);
  window.addEventListener('resize', heightOfHeader);
})();
