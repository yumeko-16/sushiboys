(()=>{"use strict";var e,t,n,o,d;e=function(){var e=document.getElementById("wrapper"),t=document.getElementById("header").clientHeight,n=document.getElementById("hero");console.log(n),e.style.paddingBlockStart="".concat(t,"px"),null!=n&&(n.style.marginBlockStart="-".concat(t,"px"))},document.addEventListener("DOMContentLoaded",e),window.addEventListener("resize",e),window.addEventListener("scroll",(function(){var e=document.getElementById("header"),t=0;e&&(window.scrollY<t||window.scrollY<=10?e.classList.remove("is-hide"):e.classList.add("is-hide"),t=window.scrollY)})),t=document.querySelector("html"),n=document.getElementById("header"),o=document.getElementById("toggle-trigger"),d=null,n&&o&&o.addEventListener("change",(function(e){e.target.checked?(d=window.scrollY,setTimeout((function(){t.classList.add("js-scroll-prevent")}),300)):(t.classList.remove("js-scroll-prevent"),window.scrollTo(0,d),d=null,setTimeout((function(){n.classList.remove("is-hide")}),100))}),!1)})();