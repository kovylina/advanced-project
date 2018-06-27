import setMargin from "./modules/margin";

setMargin(".blog");

window.onresize = function() {
  setMargin(".blog");
};
