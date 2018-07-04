import "./modules/preloader";
import setMargin from "./modules/margin";
import "./modules/blog-scroll";
import "./modules/fullscreenmenu";
import "./modules/scrolldown";

window.onload = function() {
  setMargin(".blog");
};

window.onresize = function() {
  setMargin(".blog");
};
