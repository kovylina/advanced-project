import scrollOneScreen from "./scrollonescreen";

const upButton = document.querySelector(".reviews__up-btns");

const onUpButtonClick = function(e) {
  e.preventDefault();
  scrollOneScreen("up");
};

window.addEventListener("load", init);

function init(e) {
  upButton.addEventListener("click", onUpButtonClick);
}
