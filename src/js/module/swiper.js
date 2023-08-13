const initializeSwiper = (selector) => {
  return new Swiper(selector, {
    freeMode: true,
    loop: false,
    slidesPerView: 'auto'
  });
};

export const SwiperDiscography = (() => {
  window.addEventListener('load', () => {
    const swiperEp = initializeSwiper('#swiper-ep');
    const swiperSingle = initializeSwiper('#swiper-single');
    const swiperFeat = initializeSwiper('#swiper-feat');
    const swiperRecord = initializeSwiper('#swiper-record');
    const swiperFarmhouseEp = initializeSwiper('#swiper-farmhouse-ep');
    const swiperFarmhouseSingle = initializeSwiper('#swiper-farmhouse-single');
  });
})();

export const SwiperGoods = (() => {
  window.addEventListener('load', () => {
    const swiperKnickknack = initializeSwiper('#swiper-knickknack');
    const swiperRecordingMedias = initializeSwiper('#swiper-recording-media');
    const swiperHoodie = initializeSwiper('#swiper-hoodie');
    const swiperParker = initializeSwiper('#swiper-parker');
    const swiperLongTShirt = initializeSwiper('#swiper-long-t-shirt');
    const swiperTShirt = initializeSwiper('#swiper-t-shirt');
    const swiperCap = initializeSwiper('#swiper-cap');
  });
})();
