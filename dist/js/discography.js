/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/discography.js":
/*!****************************!*\
  !*** ./src/discography.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var js_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js/header */ \"./src/js/header.js\");\n/* harmony import */ var js_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js/navigation */ \"./src/js/navigation.js\");\n/* harmony import */ var js_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js/swiper */ \"./src/js/swiper.js\");\n\n\n\n\n//# sourceURL=webpack://sushiboys/./src/discography.js?");

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToggleHeader\": () => (/* binding */ ToggleHeader)\n/* harmony export */ });\nvar ToggleHeader = function () {\n  window.addEventListener('DOMContentLoaded', function () {\n    var header = document.querySelector('[data-header]');\n    var positionY = 0;\n\n    if (header === null) {\n      return;\n    }\n\n    window.addEventListener('scroll', function () {\n      if (window.scrollY < positionY) {\n        header.classList.remove('js-hide');\n      } else {\n        header.classList.add('js-hide');\n      }\n\n      positionY = window.scrollY;\n\n      if (positionY <= 10) {\n        header.classList.remove('js-hide');\n      }\n    });\n  });\n}();\n\n//# sourceURL=webpack://sushiboys/./src/js/header.js?");

/***/ }),

/***/ "./src/js/navigation.js":
/*!******************************!*\
  !*** ./src/js/navigation.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HumbergerToggle\": () => (/* binding */ HumbergerToggle)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar HumbergerToggle = function () {\n  window.addEventListener('DOMContentLoaded', function () {\n    var html = document.querySelector('html'),\n        header = document.querySelector('[data-header]'),\n        toggle = document.querySelector('[data-humberger-toggle]'),\n        links = document.querySelectorAll('[data-humberger-content] a'),\n        close = document.querySelector('[data-navigation-close]');\n    var scrollY = null;\n\n    if (toggle === null || links === null) {\n      return;\n    }\n\n    toggle.addEventListener('change', function (e) {\n      if (e.target.checked === true) {\n        scrollY = window.pageYOffset;\n        setTimeout(function () {\n          html.classList.add('js-scroll-prevent');\n        }, 300);\n      } else {\n        html.classList.remove('js-scroll-prevent');\n        window.scrollTo(0, scrollY);\n        scrollY = null;\n        setTimeout(function () {\n          header.classList.remove('js-hide');\n        }, 100);\n      }\n    }, false);\n\n    _toConsumableArray(links).map(function (link) {\n      link.addEventListener('click', function (e) {\n        if (e.target.href.includes('#')) {\n          toggle.checked = false;\n          html.classList.remove('js-scroll-prevent');\n        } else {\n          html.classList.remove('js-scroll-prevent');\n        }\n      }, false);\n    });\n  }, false);\n}();\n\n//# sourceURL=webpack://sushiboys/./src/js/navigation.js?");

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SwiperDiscography\": () => (/* binding */ SwiperDiscography),\n/* harmony export */   \"SwiperGoods\": () => (/* binding */ SwiperGoods)\n/* harmony export */ });\nvar SwiperDiscography = function () {\n  window.addEventListener('DOMContentLoaded', function () {\n    var swiperEp = new Swiper('#swiper-ep', {\n      freeMode: true,\n      loop: false,\n      slidesPerView: 'auto'\n    });\n    var swiperSingle = new Swiper('#swiper-single', {\n      freeMode: true,\n      loop: false,\n      slidesPerView: 'auto'\n    });\n    var swiperFeat = new Swiper('#swiper-feat', {\n      freeMode: true,\n      loop: false,\n      slidesPerView: 'auto'\n    });\n    var swiperRecord = new Swiper('#swiper-record', {\n      freeMode: true,\n      loop: false,\n      slidesPerView: 'auto'\n    });\n    var swiperFarmhouseEp = new Swiper('#swiper-farmhouse-ep', {\n      freeMode: true,\n      loop: false,\n      slidesPerView: 'auto'\n    });\n    var swiperFarmhouseSingle = new Swiper('#swiper-farmhouse-single', {\n      freeMode: true,\n      loop: false,\n      slidesPerView: 'auto'\n    });\n  });\n}();\nvar SwiperGoods = function () {\n  window.addEventListener('DOMContentLoaded', function () {\n    var swiperKnickknack = new Swiper('#swiper-knickknack', {\n      freeMode: true,\n      loop: false,\n      slidesPerView: 'auto'\n    });\n    var swiperRecordingMedias = new Swiper('#swiper-recording-media', {\n      freeMode: true,\n      loop: false,\n      slidesPerView: 'auto'\n    });\n    var swiperHoodie = new Swiper('#swiper-hoodie', {\n      freeMode: true,\n      loop: false,\n      slidesPerView: 'auto'\n    });\n    var swiperParker = new Swiper('#swiper-parker', {\n      freeMode: true,\n      loop: false,\n      slidesPerView: 'auto'\n    });\n    var swiperLongTShirt = new Swiper('#swiper-long-t-shirt', {\n      freeMode: true,\n      loop: false,\n      slidesPerView: 'auto'\n    });\n    var swiperTShirt = new Swiper('#swiper-t-shirt', {\n      freeMode: true,\n      loop: false,\n      slidesPerView: 'auto'\n    });\n    var swiperCap = new Swiper('#swiper-cap', {\n      freeMode: true,\n      loop: false,\n      slidesPerView: 'auto'\n    });\n  });\n}();\n\n//# sourceURL=webpack://sushiboys/./src/js/swiper.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/discography.js");
/******/ 	
/******/ })()
;