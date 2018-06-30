// Переворачивающееся меню на главной странице по кнопке "Авторизация"
(function() {
  // Получим кнопку авторизации
  const authButton = document.querySelector(".auth-button");

  // При клике на кнопку "перевернем" карточки
  authButton.addEventListener("click", function(e) {
    e.preventDefault();

    const frontCard = document.querySelector(".flipper-front");
    const backCard = document.querySelector(".flipper-back");

    frontCard.classList.add("flipper-front--show");
    backCard.classList.add("flipper-back--show");

    // скроем кнопку авторизации
    authButton.parentNode.classList.add("welcome__btn--skip");
  });
})();

// Перевернем меню по кнопке "На главную"
(function() {
  // Получим кнопку
  const backButton = document.querySelector(".form-auth__button-back");

  // При клике на кнопку "перевернем" карточки
  backButton.addEventListener("click", function(e) {
    e.preventDefault();

    const frontCard = document.querySelector(".flipper-front");
    const backCard = document.querySelector(".flipper-back");
    const authButton = document.querySelector(".welcome__btn");

    frontCard.classList.remove("flipper-front--show");
    backCard.classList.remove("flipper-back--show");

    // покаже кнопку авторизации
    authButton.classList.remove("welcome__btn--skip");
  });
})();

// Перевернем меню при клике на свободное поле
(function() {
  // Получим область
  const welcomeContainer = document.querySelector(".welcome");

  // При клике на кнопку "перевернем" карточки
  welcomeContainer.addEventListener("click", function(e) {
    e.preventDefault();

    // Проверим, что кликнули по свободному пространству
    let target = e.target;

    if (!target.classList.contains("parallax__layer-img")) return;

    const frontCard = document.querySelector(".flipper-front");
    const backCard = document.querySelector(".flipper-back");
    const authButton = document.querySelector(".welcome__btn");

    if (frontCard.classList.contains("flipper-front--show"))
      frontCard.classList.remove("flipper-front--show");

    if (backCard.classList.contains("flipper-back--show"))
      backCard.classList.remove("flipper-back--show");

    // покаже кнопку авторизации
    if (authButton.classList.contains("welcome__btn--skip"))
      authButton.classList.remove("welcome__btn--skip");
  });
})();
