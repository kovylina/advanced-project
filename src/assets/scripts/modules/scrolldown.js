import scrollOneScreen from "./scrollonescreen";

const downButton = document.querySelector(".hero__down_btns");

const onDownButtonClick = function(e) {
  e.preventDefault();
  scrollOneScreen("down");
};

window.addEventListener("load", init);

function init(e) {
  downButton.addEventListener("click", onDownButtonClick);
}
