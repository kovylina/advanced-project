import "./modules/preloader";
import setMargin from "./modules/margin";
import "./modules/blog-scroll";
import "./modules/fullscreenmenu";
import "./modules/scrolldown";
import "./modules/parallaxonscroll";

window.onload = function() {
  setMargin(".blog");
};

window.onresize = function() {
  setMargin(".blog");
};
