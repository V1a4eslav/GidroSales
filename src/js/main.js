/*
Так как у нас подключен вебпак чисто для модульности js файлы мы можем экспортировать функции с модулей
и импортировать их в наш основной файл main.js
from ---> export function naame() {
            console.log('1000');
         }
in ----->  import { naame } from './jjs';
           naame();
*/


//============== header =================
import { burger } from './headerFunc/burger';
burger();
import { headerBottomClick } from './headerFunc/headerBottomClick';
headerBottomClick();
//============== header =================

//============== mainSliderSwiper =================
import { mainBannerSwiper } from './swiper/swiper';
mainBannerSwiper();
//mainSliderSwiper=========== mainSliderSwiper ==============mainSliderSwiper


//============== OtherSliderSwiper =================
import { sliders } from './swiper/swiper';
sliders();
//OtherSliderSwiper=========================OtherSliderSwiper

//================ Like ==========================
import { like } from './like/like';
like();
//================ Like ==========================

//================ Tabs ==========================
import { tabss } from './tabs/tabs';
tabss();
//================ Tabs ==========================


