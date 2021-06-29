/*
Так как у нас подключен вебпак чисто для модульности js файлы мы можем экспортировать функции с модулей
и импортировать их в наш основной файл main.js
from ---> export function naame() {
            console.log('1000');
         }
in ----->  import { naame } from './jjs';
           naame();
*/

import { burger } from './headerFunc/burger';
import { headerBottomClick } from './headerFunc/headerBottomClick';
import { mainBannerSwiper } from './swiper/swiper';
import { sliders } from './swiper/swiper';
import { like } from './like/like';
import { tabss } from './tabs/tabs';
import { footerSpoller } from './footerSpoller/footerSpoller';
import { noUiSliderMy } from './noUiSliderMy/noUiSliderMy';

window.addEventListener('load', () => {
   burger();
   headerBottomClick();
   mainBannerSwiper();
   sliders();
   like();
   tabss();
   footerSpoller();
   noUiSliderMy();
});