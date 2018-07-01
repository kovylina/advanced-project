import setMargin from "./modules/margin";
import "./modules/blog-scroll";
import "./modules/fullscreenmenu";

window.onload = function() {
  setMargin(".blog");
};

window.onresize = function() {
  setMargin(".blog");
};
