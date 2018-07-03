import "./modules/preloader";
import "./modules/slider";
import "./modules/blur";
import "./modules/fullscreenmenu";
import setMargin from "./modules/margin";

window.onload = function() {
  setMargin(".reviews__container");
};

window.onresize = function() {
  setMargin(".reviews__container");
};
