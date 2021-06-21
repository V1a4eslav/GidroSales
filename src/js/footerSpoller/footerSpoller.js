export function footerSpoller() {
   let footerInfoTitle = document.querySelectorAll('.footer__info-title');
   footerInfoTitle.forEach((el) => {
      el.addEventListener("click", function () {
         this.classList.toggle('_active');
         let content = this.nextElementSibling;
         console.log(content);
         if (content.style.maxHeight) {
            content.style.maxHeight = null;
         } else {
            content.style.maxHeight = content.scrollHeight + 'px';
         }
      });
   });
}
