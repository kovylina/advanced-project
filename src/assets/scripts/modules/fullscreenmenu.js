const menuButton = document.querySelector(".hamburger-menu");
const fullscreenMenu = document.querySelector(".fullscreen-nav");

const onFullscreenMenuButtonClick = function(e) {
  e.preventDefault();
  // Покажем\скроем меню
  fullscreenMenu.classList.toggle("fullscreen-nav--active");
  // Повесим\снимем класс активности меню на кнопку для изменения картинки
  menuButton.classList.toggle("hamburger-menu--is-active");
  // Повесим\снимем класс активности меню на родительский контейнер для изменения положения
  menuButton.parentNode.classList.toggle("hero__menu--fullscreen-menu");
};

menuButton.addEventListener("click", onFullscreenMenuButtonClick);
