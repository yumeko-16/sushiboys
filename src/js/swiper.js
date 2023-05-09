import Swiper from 'swiper';

const createSwiper = (selector) => {
  return new Swiper(selector, {
    freeMode: true,
    loop: false,
    slidesPerView: `auto`
  });
};

export const SwiperDiscography = (() => {
  window.addEventListener(`load`, () => {
    const swiperEp = createSwiper(`#swiper-ep`);
    const swiperSingle = createSwiper(`#swiper-single`);
    const swiperFeat = createSwiper(`#swiper-feat`);
    const swiperRecord = createSwiper(`#swiper-record`);
    const swiperFarmhouseEp = createSwiper(`#swiper-farmhouse-ep`);
    const swiperFarmhouseSingle = createSwiper(`#swiper-farmhouse-single`);
  });
})();

export const SwiperGoods = (() => {
  window.addEventListener(`load`, () => {
    const swiperKnickknack = new Swiper(`#swiper-knickknack`);
    const swiperRecordingMedias = new Swiper(`#swiper-recording-media`);
    const swiperHoodie = new Swiper(`#swiper-hoodie`);
    const swiperParker = new Swiper(`#swiper-parker`);
    const swiperLongTShirt = new Swiper(`#swiper-long-t-shirt`);
    const swiperTShirt = new Swiper('#swiper-t-shirt');
    const swiperCap = new Swiper(`#swiper-cap`);
  });
})();
