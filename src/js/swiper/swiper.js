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

export function sliders() {
   //основная функция для создания слайдеров
   function createSlider(elemClass, config) {
      const defaultConfig = {
         slidesPerView: 4,
         spaceBetween: 29,
         observer: true,
         observeParents: true,
         observeSlideChildren: true,
         keyboard: {
            // Управление стрелками
            onlyInViewport: true,
         }
      };
      const sliderConfig = { ...defaultConfig, ...config };

      new Swiper(elemClass, sliderConfig);
   }
   // далее уже готовим под каждый слайдер код
   //PopularProduct
   let contentItemProductsContainer = document.querySelectorAll('.content-item-products__container');
   contentItemProductsContainer.forEach((slider, index) => {
      createSlider(`.content-item-products__container_${index + 1}`, {
         navigation: {
            nextEl: `.popular-products__button-next_${index + 1}`,
            prevEl: `.popular-products__button-prev_${index + 1}`
         },
      });
   });
}