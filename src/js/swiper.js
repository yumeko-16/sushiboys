export const SwiperDiscography = (() => {

  window.addEventListener('DOMContentLoaded', () => {

    const swiperEp = new Swiper('#swiper-ep', {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 20,
    });

    const swiperSingle = new Swiper('#swiper-single', {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 20,
    });

    const swiperFeat = new Swiper('#swiper-feat', {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 20,
    });

    const swiperRecord = new Swiper('#swiper-record', {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 20,
    });

    const swiperFarmhouseEp = new Swiper('#swiper-farmhouse-ep', {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 20,
    });

    const swiperFarmhouseSingle = new Swiper('#swiper-farmhouse-single', {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 20,
    });

  });

})();
