export function burger() {
   let burgerIcon = document.querySelector('.burger-icon');
   if (burgerIcon) {
      burgerIcon.addEventListener("click", () => {
         burgerIcon.classList.toggle('_active');
      });
   }
}