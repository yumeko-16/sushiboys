(()=>{"use strict";var e,t;e=document.getElementById("header"),t=0,e&&window.addEventListener("scroll",(function(){window.scrollY<t?e.classList.remove("is-hide"):e.classList.add("is-hide"),(t=window.scrollY)<=10&&e.classList.remove("is-hide")})),function(){var e=document.querySelector("html"),t=document.getElementById("header"),s=document.getElementById("toggle-trigger"),n=null;t&&s&&s.addEventListener("change",(function(s){s.target.checked?(n=window.pageYOffset,setTimeout((function(){e.classList.add("js-scroll-prevent")}),300)):(e.classList.remove("js-scroll-prevent"),window.scrollTo(0,n),n=null,setTimeout((function(){t.classList.remove("is-hide")}),100))}),!1)}()})();