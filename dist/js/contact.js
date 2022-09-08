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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var js_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js/header */ \"./src/js/header.js\");\n/* harmony import */ var js_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js/navigation */ \"./src/js/navigation.js\");\n/* harmony import */ var js_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js/contact */ \"./src/js/contact.js\");\n\n\n\n\n\n//# sourceURL=webpack://sushiboys/./src/contact.js?");

/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Validation\": () => (/* binding */ Validation),\n/* harmony export */   \"Submit\": () => (/* binding */ Submit)\n/* harmony export */ });\nvar form = document.querySelector('[data-form]');\nvar inputs = document.querySelectorAll('[data-form-require]');\nvar submit = document.querySelector('[data-form-submit]');\nvar successes = null;\nvar Validation = function () {\n  window.addEventListener('load', function () {\n    if (inputs === undefined || inputs === null) {\n      return;\n    }\n\n    inputs.forEach(function (input) {\n      var successMessage = input.nextElementSibling;\n      var errorMessage = successMessage.nextElementSibling;\n      input.addEventListener('input', function () {\n        switch (input.name) {\n          case 'your-name':\n            if (input.value.length === 0) {\n              successMessage.classList.remove('js-success');\n              errorMessage.classList.add('js-error');\n            } else {\n              successMessage.classList.add('js-success');\n              errorMessage.classList.remove('js-error');\n            }\n\n            break;\n\n          case 'your-email':\n            if (!input.value.match(/^(([^<>()\\[\\]\\.,;:\\s@\\\"'#\\*]+(\\.[^<>()\\[\\]\\.,;:\\s@\\\"'#\\*]+)*)|(\\\".+\\\"))@(([^<>()[\\]\\.,;:\\s@\\\"'#\\*]+\\.)+[^<>()[\\]\\.,;:\\s@\\\"'#\\*]{2,})$/i) || input.value.length === 0) {\n              successMessage.classList.remove('js-success');\n              errorMessage.classList.add('js-error');\n            } else {\n              successMessage.classList.add('js-success');\n              errorMessage.classList.remove('js-error');\n            }\n\n            break;\n\n          case 'your-subject':\n            if (input.value.length === 0) {\n              successMessage.classList.remove('js-success');\n              errorMessage.classList.add('js-error');\n            } else {\n              successMessage.classList.add('js-success');\n              errorMessage.classList.remove('js-error');\n            }\n\n            break;\n\n          case 'your-message':\n            if (input.value.length === 0) {\n              successMessage.classList.remove('js-success');\n              errorMessage.classList.add('js-error');\n            } else {\n              successMessage.classList.add('js-success');\n              errorMessage.classList.remove('js-error');\n            }\n\n            break;\n\n          default:\n            break;\n        }\n\n        setTimeout(function () {\n          checkError();\n        }, 300);\n      });\n\n      var checkError = function checkError() {\n        successes = document.querySelectorAll('.js-success');\n\n        if (inputs.length === successes.length) {\n          submit.disabled = false;\n        } else {\n          submit.disabled = true;\n        }\n      };\n    });\n  });\n}();\nvar Submit = function () {\n  submit.addEventListener('click', function (e) {\n    e.preventDefault();\n    submit.disabled = true;\n    postFetch();\n  });\n\n  var postFetch = function postFetch() {\n    var formData = new FormData(form);\n    var url_base = 'https://sushiboys350.com';\n    var url = location.href;\n    var id = null;\n\n    if (url.includes('sushiboys350.com')) {\n      id = 5;\n    } else {\n      id = 8;\n    }\n\n    var api_endpoint = \"\".concat(url_base, \"/wordpress/wp-json/contact-form-7/v1/contact-forms/\").concat(id, \"/feedback\");\n    fetch(api_endpoint, {\n      method: 'POST',\n      body: formData\n    }).then(function (response) {\n      if (!response.ok) {\n        console.log('error!');\n        submit.disabled = false;\n      } else {\n        console.log('ok!');\n      }\n\n      return response.json();\n    }).then(function (data) {\n      console.log(data);\n\n      if (data.status === 'validation_failed') {\n        submit.disabled = false;\n      } else {\n        submit.disabled = true;\n        Array.from(document.querySelectorAll('input')).forEach(function (input) {\n          return input.value = '';\n        });\n        document.querySelector('textarea').value = '';\n        setTimeout(function () {\n          checkError();\n        }, 300);\n\n        var checkError = function checkError() {\n          successes = document.querySelectorAll('.js-success');\n          successes.forEach(function (success) {\n            success.classList.remove('js-success');\n          });\n        };\n      }\n    })[\"catch\"](function (error) {\n      console.log(error);\n      submit.disabled = false;\n    });\n  };\n}();\n\n//# sourceURL=webpack://sushiboys/./src/js/contact.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/contact.js");
/******/ 	
/******/ })()
;