import "./modules/slider";
import "./modules/blur";
import setMargin from "./modules/margin";

setMargin(".reviews__container");

window.onresize = function() {
  setMargin(".reviews__container");
};
