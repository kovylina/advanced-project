// Кнопка авторизации
const authButton = document.querySelector(".welcome__btn");
// Кнопка "На главную"
const backButton = document.querySelector(".form-auth__button-back");
// Передняя карточка с информацией о пользователе
const frontCard = document.querySelector(".flipper-front");
// Обратная сторона с формой авторизации
const backCard = document.querySelector(".flipper-back");
// Главная страница
const welcomeContainer = document.querySelector(".welcome");

// Переворачивающееся меню на главной странице по кнопке "Авторизация"
const onClickAuthButton = function(e) {
  // Предотвратим переход по ссылке
  e.preventDefault();
  // Поменяем местами карточки
  frontCard.classList.add("flipper-front--show");
  backCard.classList.add("flipper-back--show");

  // скроем кнопку авторизации
  authButton.classList.add("welcome__btn--skip");
};

const onClickBackButton = function(e) {
  // Предотвратим переход по ссылке
  e.preventDefault();
  // Поменяем местами карточки
  frontCard.classList.remove("flipper-front--show");
  backCard.classList.remove("flipper-back--show");

  // покажем кнопку авторизации
  authButton.classList.remove("welcome__btn--skip");
};

// Перевернем меню при клике на свободное поле
const onClickField = function(e) {
  // Проверим, что кликнули по свободному пространству
  let target = e.target;

  if (!target.classList.contains("parallax__layer-img")) return;

  if (frontCard.classList.contains("flipper-front--show"))
    frontCard.classList.remove("flipper-front--show");

  if (backCard.classList.contains("flipper-back--show"))
    backCard.classList.remove("flipper-back--show");

  // покаже кнопку авторизации
  if (authButton.classList.contains("welcome__btn--skip"))
    authButton.classList.remove("welcome__btn--skip");
};

const onInit = function(e) {
  authButton.addEventListener("click", onClickAuthButton);
  backButton.addEventListener("click", onClickBackButton);
  welcomeContainer.addEventListener("click", onClickField);
};

window.addEventListener("load", onInit);
