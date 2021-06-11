export function mainBannerSwiper() {
   const BannerSlider = new Swiper('.banner-slider__container', {
      keyboard: {
         // Управление стрелками
         onlyInViewport: true,
      },
      spaceBetween: 10,
      pagination: {
         el: '.bunner-slider__pagination',
         type: 'bullets',
         clickable: true,
         // активный кружок (большой) "Библиотека"
         dynamicBullets: true,
         // к-во активных кружков (больших) "Библиотека"
         dynamicMainBullets: 1,
      },
      navigation: {
         nextEl: '.bunner-slider__button-next',
         prevEl: '.bunner-slider__button-prev ',
      },
   });
}