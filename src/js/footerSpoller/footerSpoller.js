export function footerSpoller() {
   let footerInfoTitle = document.querySelectorAll('.footer__info-title');
   footerInfoTitle.forEach((el) => {
      el.addEventListener("click", function () {
         this.classList.toggle('_active');
         let content = this.nextElementSibling;
         if (content.style.maxHeight) {
            content.style.maxHeight = null;
         } else {
            content.style.maxHeight = content.scrollHeight + 'px';
         }
      });
   });


   // споллер для фильтра форм 
   let parametersFilterLabel = document.querySelectorAll('.parameters-filter__label');
   parametersFilterLabel.forEach(element => {
      element.addEventListener("click", function (e) {
         this.classList.toggle('_active');
         let content = this.nextElementSibling;
         if (content.style.maxHeight) {
            content.style.maxHeight = null;
         } else {
            content.style.maxHeight = content.scrollHeight + 'px';
         }
      });
   });
}
