/*
Так как у нас подключен вебпак чисто для модульности js файлы мы можем экспортировать функции с модулей
и импортировать их в наш основной файл main.js
from ---> export function naame() {
            console.log('1000');
         }
in ----->  import { naame } from './jjs';
           naame();
*/


//============== burger =================
import { burger } from './burger/burger';
burger();
//============== burger =================

//============== mainSliderSwiper =================
import { mainBannerSwiper } from './swiper/swiper';
mainBannerSwiper();
//mainSliderSwiper=========== mainSliderSwiper ==============mainSliderSwiper