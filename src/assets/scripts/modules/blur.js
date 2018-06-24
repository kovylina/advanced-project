var blur = (function() {
  var wrapper = document.querySelector(".contact-form");
  var form = document.querySelector(".contact-form__blur");
  return {
    set: function() {
      var imgWidth = document.querySelector(".reviews__bg").offsetWidth,
        imgHeight = document.querySelector(".reviews__bg").offsetHeight,
        posLeft = -wrapper.offsetLeft,
        posTop = -wrapper.offsetTop,
        blurCSS = form.style;
      blurCSS.backgroundSize = imgWidth + "px" + " " + imgHeight + "px";
      blurCSS.backgroundPosition = posLeft + "px" + " " + posTop + "px";
    }
  };
})();

blur.set();

window.onresize = function() {
  blur.set;
};
