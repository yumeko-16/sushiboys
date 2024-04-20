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

/***/ "./src/js/discography.js":
/*!*******************************!*\
  !*** ./src/js/discography.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/navigation */ \"./src/js/module/navigation.js\");\n/* harmony import */ var _module_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/swiper */ \"./src/js/module/swiper.js\");\n\n\n\n//# sourceURL=webpack://sushiboys/./src/js/discography.js?");

/***/ }),

/***/ "./src/js/module/navigation.js":
/*!*************************************!*\
  !*** ./src/js/module/navigation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HumbergerToggle: () => (/* binding */ HumbergerToggle)\n/* harmony export */ });\n/** Toggle the hamburger menu. */\nvar HumbergerToggle = function () {\n  var BODY = document.body;\n  var HEADER = document.getElementById('header');\n  var TRIGGER = document.getElementById('toggle-trigger');\n\n  if (!BODY || !HEADER || !TRIGGER) {\n    return;\n  }\n\n  var scrollY = null;\n\n  function handleToggleChange(e) {\n    if (e.target.checked) {\n      scrollY = window.scrollY;\n      setTimeout(function () {\n        BODY.classList.add('js-scroll-prevent');\n      }, 300);\n    } else {\n      BODY.classList.remove('js-scroll-prevent');\n      window.scrollTo(0, scrollY);\n      scrollY = null;\n      setTimeout(function () {\n        HEADER.classList.remove('is-hide');\n      }, 100);\n    }\n  }\n\n  TRIGGER.addEventListener('change', handleToggleChange, false);\n}();\n\n//# sourceURL=webpack://sushiboys/./src/js/module/navigation.js?");

/***/ }),

/***/ "./src/js/module/swiper.js":
/*!*********************************!*\
  !*** ./src/js/module/swiper.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SwiperDiscography: () => (/* binding */ SwiperDiscography),\n/* harmony export */   SwiperGoods: () => (/* binding */ SwiperGoods)\n/* harmony export */ });\nvar initializeSwiper = function initializeSwiper(selector) {\n  return new Swiper(selector, {\n    freeMode: true,\n    loop: false,\n    slidesPerView: 'auto'\n  });\n};\n\nvar SwiperDiscography = function () {\n  window.addEventListener('load', function () {\n    var swiperEp = initializeSwiper('#swiper-ep');\n    var swiperSingle = initializeSwiper('#swiper-single');\n    var swiperFeat = initializeSwiper('#swiper-feat');\n    var swiperRecord = initializeSwiper('#swiper-record');\n    var swiperFarmhouseEp = initializeSwiper('#swiper-farmhouse-ep');\n    var swiperFarmhouseSingle = initializeSwiper('#swiper-farmhouse-single');\n  });\n}();\nvar SwiperGoods = function () {\n  window.addEventListener('load', function () {\n    var swiperKnickknack = initializeSwiper('#swiper-knickknack');\n    var swiperRecordingMedias = initializeSwiper('#swiper-recording-media');\n    var swiperHoodie = initializeSwiper('#swiper-hoodie');\n    var swiperParker = initializeSwiper('#swiper-parker');\n    var swiperLongTShirt = initializeSwiper('#swiper-long-t-shirt');\n    var swiperTShirt = initializeSwiper('#swiper-t-shirt');\n    var swiperCap = initializeSwiper('#swiper-cap');\n  });\n}();\n\n//# sourceURL=webpack://sushiboys/./src/js/module/swiper.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/discography.js");
/******/ 	
/******/ })()
;