(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-header]"),t=0;null!==e&&window.addEventListener("scroll",(function(){window.scrollY<t?e.classList.remove("js-hide"):e.classList.add("js-hide"),(t=window.scrollY)<=10&&e.classList.remove("js-hide")}))})),window.addEventListener("DOMContentLoaded",(function(){var t,r=document.querySelector("html"),n=document.querySelector("[data-header]"),o=document.querySelector("[data-humberger-toggle]"),l=document.querySelectorAll("[data-humberger-content] a"),a=(document.querySelector("[data-navigation-close]"),null);null!==o&&null!==l&&(o.addEventListener("change",(function(e){!0===e.target.checked?(a=window.pageYOffset,setTimeout((function(){r.classList.add("js-scroll-prevent")}),300)):(r.classList.remove("js-scroll-prevent"),window.scrollTo(0,a),a=null,setTimeout((function(){n.classList.remove("js-hide")}),100))}),!1),(t=l,function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){e.addEventListener("click",(function(e){e.target.href.includes("#")?(o.checked=!1,r.classList.remove("js-scroll-prevent")):r.classList.remove("js-scroll-prevent")}),!1)})))}),!1)})();