(()=>{"use strict";e=document.querySelector("[data-humberger]"),n=document.querySelector("[data-navigation]"),t=document.querySelector("[data-navigation-close]"),window.addEventListener("DOMContentLoaded",(function(){e.addEventListener("click",(function(){e.classList.add("js-hide"),n.classList.add("js-open")})),t.addEventListener("click",(function(){e.classList.remove("js-hide"),n.classList.remove("js-open")}))}));var e,n,t,d=document.querySelector("[data-news]");window.addEventListener("DOMContentLoaded",(function(){for(var e=0,n=d.children.length;e<n;e++)d.insertBefore(d.children[e],d.children[0])}))})();