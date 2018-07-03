const article = document.querySelectorAll(".articles__item");
const content = document.querySelector(".blog__content");
const itemMenu = document.querySelectorAll(".blog-menu__link");
const wrapMenu = document.querySelector(".blog-menu");
const menu = document.querySelector(".blog-menu__list ");
const swapButton = document.querySelector(".blog-menu__swipe-link");

const MEDIA_TABLET = 768;
let positionArticle = [];
let offsetHeight = 0;
let isAnimation = false;

const setPositionArticle = function(elements) {
  let position = [];
  Array.from(elements).forEach((item, i) => {
    position[i] = {};
    position[i].item = item;
    position[i].top =
      item.getBoundingClientRect().top - offsetHeight + window.pageYOffset;
    position[i].bottom =
      item.getBoundingClientRect().bottom + window.pageYOffset;
  });
  return position;
};

const onScrollPageFixMenu = function(e) {
  if (window.innerWidth > MEDIA_TABLET) {
    let scroll = window.pageYOffset;
    if (content.getBoundingClientRect().top > 0) {
      wrapMenu.classList.remove("blog-menu--fixed");
    } else {
      wrapMenu.classList.add("blog-menu--fixed");
    }
  }
};

const onSwapButtonClick = function(e) {
  e.preventDefault();

  const menuColumn = document.querySelector(".blog__menu");
  menuColumn.classList.toggle("blog__menu--swap");
};

const onClickMenu = function(e) {
  e.preventDefault();

  if (!isAnimation) {
    isAnimation = true;
    let element = e.target;
    let currentIndex;
    let currentArticle;
    window.removeEventListener("scroll", onScrollPage);
    removeActiveClass();
    Array.from(itemMenu).forEach((item, index) => {
      if (item === element) {
        currentIndex = index;
      }
    });
    currentArticle = article[currentIndex];
    let toScroll = currentArticle.getBoundingClientRect().top;

    if (detectIE()) {
      window.scrollBy(0, toScroll);
    } else {
      window.scrollBy({ top: toScroll, behavior: "smooth" });
    }

    element.classList.add("blog-menu__link--active");

    setTimeout(() => {
      isAnimation = false;
      window.addEventListener("scroll", onScrollPage);
    }, 1000);
  }
};

const onScrollPage = function(e) {
  const isVision = function(element, current) {
    let scroll = window.pageYOffset;

    return (
      scroll >= element.top &&
      scroll < element.bottom &&
      !current.classList.contains("blog-menu__link--active")
    );
  };

  positionArticle.forEach((el, i) => {
    let currentEl = itemMenu[i];
    if (isVision(el, currentEl)) {
      removeActiveClass();
      currentEl.classList.add("blog-menu__link--active");
    }
  });
};

window.addEventListener("load", init);

function init(e) {
  positionArticle = setPositionArticle(article);
  window.addEventListener("resize", function() {
    positionArticle = setPositionArticle(article);
    if (
      window.innerWidth <= MEDIA_TABLET &&
      wrapMenu.classList.contains("blog-menu--fixed")
    ) {
      wrapMenu.classList.remove("blog-menu--fixed");
    }
  });
  window.addEventListener("scroll", onScrollPageFixMenu);
  menu.addEventListener("click", onClickMenu);
  window.addEventListener("scroll", onScrollPage);
  swapButton.addEventListener("click", onSwapButtonClick);
}

function removeActiveClass() {
  Array.from(itemMenu)
    .filter(item => {
      return item.classList.contains("blog-menu__link--active");
    })
    .forEach(item => {
      item.classList.remove("blog-menu__link--active");
    });
}

function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result … IE 10 ua = 'Mozilla/5.0 (compatible;
  // MSIE 10.0; Windows NT 6.2; Trident/6.0)'; IE 11 ua = 'Mozilla/5.0 (Windows NT
  // 6.3; Trident/7.0; rv:11.0) like Gecko'; Edge 12 (Spartan) ua = 'Mozilla/5.0
  // (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko)
  // Chrome/39.0.2171.71 Safari/537.36 Edge/12.0'; Edge 13 ua = 'Mozilla/5.0
  // (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
  // Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }

  var trident = ua.indexOf("Trident/");
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf("rv:");
    return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
  }

  var edge = ua.indexOf("Edge/");
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
  }

  // other browser
  return false;
}
