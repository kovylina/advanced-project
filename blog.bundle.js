webpackJsonp([3],{11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=0;switch(e){case"up":t=-window.innerHeight;break;case"down":t=window.innerHeight;break;default:t=window.innerHeight}(0,i.default)()?window.scrollBy(0,t):window.scrollBy({top:t,behavior:"smooth"})};var o,r=n(12),i=(o=r)&&o.__esModule?o:{default:o}},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(e.indexOf("Trident/")>0){var n=e.indexOf("rv:");return parseInt(e.substring(n+3,e.indexOf(".",n)),10)}var o=e.indexOf("Edge/");return o>0&&parseInt(e.substring(o+5,e.indexOf(".",o)),10)}},18:function(e,t,n){"use strict";var o=document.querySelector(".hamburger-menu"),r=document.querySelector(".fullscreen-nav");o.addEventListener("click",function(e){e.preventDefault(),r.classList.toggle("fullscreen-nav--active"),o.classList.toggle("hamburger-menu--is-active"),o.parentNode.classList.toggle("hero__menu--fullscreen-menu")})},19:function(e,t,n){"use strict";var o,r=n(11),i=(o=r)&&o.__esModule?o:{default:o},c=document.querySelector(".hero__down_btns"),u=function(e){e.preventDefault(),(0,i.default)("down")};window.addEventListener("load",function(e){c.addEventListener("click",u)})},20:function(e,t,n){"use strict";var o,r,i,c=(o=document.querySelector(".hero__background"),r=document.querySelector(".user"),i=document.querySelector(".hero__title-pic"),{move:function(e,t,n){var o="translate3d(0, "+t/-n+"%, 0)",r=e.style;r.transform=o,r.webkitTransform=o},init:function(e){this.move(o,e,30),this.move(i,e,20),this.move(r,e,10)}});window.onscroll=function(){var e=window.pageYOffset;c.init(e)}},287:function(e,t,n){"use strict";n(7);var o,r=n(68),i=(o=r)&&o.__esModule?o:{default:o};n(288),n(18),n(19),n(20),window.onload=function(){(0,i.default)(".blog")},window.onresize=function(){(0,i.default)(".blog")}},288:function(e,t,n){"use strict";function o(){Array.from(s).filter(function(e){return e.classList.contains("blog-menu__link--active")}).forEach(function(e){e.classList.remove("blog-menu__link--active")})}var r,i=n(12),c=(r=i)&&r.__esModule?r:{default:r},u=document.querySelectorAll(".articles__item"),l=document.querySelector(".blog__content"),s=document.querySelectorAll(".blog-menu__link"),a=document.querySelector(".blog-menu"),d=document.querySelector(".blog-menu__list "),f=document.querySelector(".blog-menu__swipe-link"),m=[],g=!1,v=function(e){var t=[];return Array.from(e).forEach(function(e,n){t[n]={},t[n].item=e,t[n].top=e.getBoundingClientRect().top-0+window.pageYOffset,t[n].bottom=e.getBoundingClientRect().bottom+window.pageYOffset}),t},w=function(e){window.innerWidth>768&&(window.pageYOffset,l.getBoundingClientRect().top>0?a.classList.remove("blog-menu--fixed"):a.classList.add("blog-menu--fixed"))},_=function(e){e.preventDefault(),document.querySelector(".blog__menu").classList.toggle("blog__menu--swap")},b=function(e){if(e.preventDefault(),!g){g=!0;var t=e.target,n=void 0;window.removeEventListener("scroll",p),o(),Array.from(s).forEach(function(e,o){e===t&&(n=o)});var r=u[n].getBoundingClientRect().top;(0,c.default)()?window.scrollBy(0,r):window.scrollBy({top:r,behavior:"smooth"}),t.classList.add("blog-menu__link--active"),setTimeout(function(){g=!1,window.addEventListener("scroll",p)},1e3)}},p=function(e){m.forEach(function(e,t){var n,r,i,c=s[t];n=e,r=c,(i=window.pageYOffset)>=n.top&&i<n.bottom&&!r.classList.contains("blog-menu__link--active")&&(o(),c.classList.add("blog-menu__link--active"))})};window.addEventListener("load",function(e){m=v(u),window.addEventListener("resize",function(){m=v(u),window.innerWidth<=768&&a.classList.contains("blog-menu--fixed")&&a.classList.remove("blog-menu--fixed")}),window.addEventListener("scroll",w),d.addEventListener("click",b),window.addEventListener("scroll",p),f.addEventListener("click",_)})},68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=document.querySelector(".footer"),n=getComputedStyle(t).height;document.querySelector(e).style.marginBottom=n}},7:function(e,t,n){"use strict";function o(){s++;var e=document.querySelectorAll(".preloader__circle");Array.from(e).forEach(function(e,t){e.style.strokeDashoffset=2.51*(100-l*s)}),u.innerHTML=(l*s<<0)+"%",s>=c&&setTimeout(function(){r.classList.contains("preloader--done")||r.classList.add("preloader--done")},1e3)}for(var r=document.querySelector(".preloader"),i=document.getElementsByTagName("img"),c=i.length,u=document.querySelector(".preloader__progress-percent"),l=100/c,s=0,a=0;a<c;a++){var d=new Image;d.onload=o,d.onerror=o,d.src=i[a].src}}},[287]);