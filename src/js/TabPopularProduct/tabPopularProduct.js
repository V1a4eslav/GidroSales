export function tabPopularProduct() {
   let tabsPopular = document.querySelector('.tabs-popular');
   let tabsPopularButton = document.querySelectorAll('.tabs-popular__button');
   let contentItemProducts = document.querySelectorAll('.content-item-products');

   function hiddenPopularTabsContent() {
      tabsPopularButton.forEach((el) => {
         el.classList.remove('_active');
      });
      contentItemProducts.forEach((el) => {
         el.classList.remove('_active');
      });
   }

   function showPopularTabsContent(i = 0) {
      tabsPopularButton[i].classList.add('_active');
      contentItemProducts[i].classList.add('_active');
   }

   tabsPopular.addEventListener("click", (e) => {
      let target = e.target;
      if (target.classList.contains('tabs-popular__button')) {
         tabsPopularButton.forEach((tab, i) => {
            if (target == tab) {
               hiddenPopularTabsContent();
               showPopularTabsContent(i);
            }
         });
      }
   });
}

export function like() {
   let likeItem = document.querySelectorAll('.item-product__like');
   likeItem.forEach(el => {
      el.addEventListener("click", function (e) {
         e.preventDefault();
         el.classList.toggle('empty-like');
      });
   });
}