import setMargin from "./modules/margin";
import "./modules/blog-scroll";

window.onload = function() {
  setMargin(".blog");
};

window.onresize = function() {
  setMargin(".blog");
};
