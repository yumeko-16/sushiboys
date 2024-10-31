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

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/navigation */ \"./src/js/module/navigation.js\");\n/* harmony import */ var _module_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/contact */ \"./src/js/module/contact.js\");\n\n\n\n//# sourceURL=webpack://sushiboys/./src/js/contact.js?");

/***/ }),

/***/ "./src/js/module/contact.js":
/*!**********************************!*\
  !*** ./src/js/module/contact.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Submit: () => (/* binding */ Submit),\n/* harmony export */   Validation: () => (/* binding */ Validation)\n/* harmony export */ });\nvar Validation = function () {\n  window.addEventListener(\"load\", function () {\n    var inputs = document.querySelectorAll(\"[data-form-require]\");\n    var successes = null;\n    if (inputs === undefined || inputs === null) return;\n    inputs.forEach(function (input) {\n      var successMessage = input.nextElementSibling;\n      var errorMessage = successMessage.nextElementSibling;\n      input.addEventListener(\"input\", function () {\n        switch (input.name) {\n          case \"your-name\":\n            if (input.value.length === 0) {\n              successMessage.classList.remove(\"js-success\");\n              errorMessage.classList.add(\"js-error\");\n            } else {\n              successMessage.classList.add(\"js-success\");\n              errorMessage.classList.remove(\"js-error\");\n            }\n\n            break;\n\n          case \"your-email\":\n            if (!input.value.match(/^(([^<>()\\[\\]\\.,;:\\s@\\\"'#\\*]+(\\.[^<>()\\[\\]\\.,;:\\s@\\\"'#\\*]+)*)|(\\\".+\\\"))@(([^<>()[\\]\\.,;:\\s@\\\"'#\\*]+\\.)+[^<>()[\\]\\.,;:\\s@\\\"'#\\*]{2,})$/i) || input.value.length === 0) {\n              successMessage.classList.remove(\"js-success\");\n              errorMessage.classList.add(\"js-error\");\n            } else {\n              successMessage.classList.add(\"js-success\");\n              errorMessage.classList.remove(\"js-error\");\n            }\n\n            break;\n\n          case \"your-subject\":\n            if (input.value.length === 0) {\n              successMessage.classList.remove(\"js-success\");\n              errorMessage.classList.add(\"js-error\");\n            } else {\n              successMessage.classList.add(\"js-success\");\n              errorMessage.classList.remove(\"js-error\");\n            }\n\n            break;\n\n          case \"your-message\":\n            if (input.value.length === 0) {\n              successMessage.classList.remove(\"js-success\");\n              errorMessage.classList.add(\"js-error\");\n            } else {\n              successMessage.classList.add(\"js-success\");\n              errorMessage.classList.remove(\"js-error\");\n            }\n\n            break;\n\n          default:\n            break;\n        }\n\n        setTimeout(function () {\n          checkError();\n        }, 300);\n      });\n\n      var checkError = function checkError() {\n        var submit = document.querySelector(\"[data-form-submit]\");\n        successes = document.querySelectorAll(\".js-success\");\n\n        if (inputs.length === successes.length) {\n          submit.disabled = false;\n        } else {\n          submit.disabled = true;\n        }\n      };\n    });\n  });\n}();\nvar Submit = function () {\n  var submit = document.querySelector(\"[data-form-submit]\");\n  var form = document.querySelector(\"[data-form]\");\n\n  var postFetch = function postFetch() {\n    var formData = new FormData(form);\n    var base_url = \"https://sushiboys350.com\";\n    var page_url = location.href;\n    var id = null;\n    var toaster = document.querySelector(\"[data-form-toaster]\");\n    var successes = null;\n\n    if (page_url.includes(\"sushiboys350.com\")) {\n      id = \"35\";\n    } else {\n      id = \"36\";\n    }\n\n    var api_endpoint = \"\".concat(base_url, \"/wordpress/wp-json/contact-form-7/v1/contact-forms/\").concat(id, \"/feedback\");\n    fetch(api_endpoint, {\n      method: \"POST\",\n      body: formData\n    }).then(function (response) {\n      if (!response.ok) {\n        // console.log(`error!`);\n        toaster.innerHTML = \"\\u5165\\u529B\\u5185\\u5BB9\\u3092\\u78BA\\u8A8D\\u3057\\u3066\\u3001\\u3082\\u3046\\u4E00\\u5EA6\\u8A66\\u3059\\u3093\\u3060\\u304A\\u2026\";\n        toaster.classList.add(\"js-error\");\n        submit.disabled = false;\n        setTimeout(function () {\n          toaster.classList.remove(\"js-error\");\n        }, 3000);\n      } else {// console.log(`ok!`);\n      }\n\n      return response.json();\n    }).then(function (data) {\n      console.log(data);\n\n      if (data.status === \"validation_failed\") {\n        toaster.innerHTML = \"\\u5165\\u529B\\u5185\\u5BB9\\u3092\\u78BA\\u8A8D\\u3057\\u3066\\u3001\\u3082\\u3046\\u4E00\\u5EA6\\u8A66\\u3059\\u3093\\u3060\\u304A\\u2026\";\n        toaster.classList.add(\"js-error\");\n        submit.disabled = false;\n        setTimeout(function () {\n          toaster.classList.remove(\"js-error\");\n        }, 3000);\n      } else {\n        toaster.innerHTML = \"\\u9001\\u4FE1\\u5B8C\\u4E86\\u3060\\u304A\\uFF01<br>\\u81EA\\u52D5\\u8FD4\\u4FE1\\u30E1\\u30FC\\u30EB\\u3092\\u78BA\\u8A8D\\u3059\\u308B\\u3093\\u3060\\u304A\\uFF01\";\n        toaster.classList.add(\"js-success\");\n        submit.disabled = true;\n        Array.from(document.querySelectorAll(\"input\")).forEach(function (input) {\n          return input.value = \"\";\n        });\n        document.querySelector(\"textarea\").value = \"\";\n        setTimeout(function () {\n          checkError();\n        }, 3000);\n\n        var checkError = function checkError() {\n          successes = document.querySelectorAll(\".js-success\");\n          successes.forEach(function (success) {\n            success.classList.remove(\"js-success\");\n          });\n        };\n      }\n    })[\"catch\"](function (error) {\n      // console.log(error);\n      toaster.innerHTML = \"\\u5165\\u529B\\u5185\\u5BB9\\u3092\\u78BA\\u8A8D\\u3057\\u3066\\u3001\\u3082\\u3046\\u4E00\\u5EA6\\u8A66\\u3059\\u3093\\u3060\\u304A\\u2026\";\n      toaster.classList.add(\"js-error\");\n      submit.disabled = false;\n      setTimeout(function () {\n        toaster.classList.remove(\"js-error\");\n      }, 3000);\n    });\n  };\n\n  submit.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    submit.disabled = true;\n    postFetch();\n  });\n}();\n\n//# sourceURL=webpack://sushiboys/./src/js/module/contact.js?");

/***/ }),

/***/ "./src/js/module/navigation.js":
/*!*************************************!*\
  !*** ./src/js/module/navigation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HumbergerToggle: () => (/* binding */ HumbergerToggle)\n/* harmony export */ });\n/**\n * Toggle the hamburger menu.\n */\nvar HumbergerToggle = function () {\n  var BODY = document.body;\n  var HEADER = document.getElementById('header');\n  var TRIGGER = document.getElementById('toggle-trigger');\n  if (!BODY || !HEADER || !TRIGGER) return;\n  var scrollY = null;\n\n  var preventScroll = function preventScroll() {\n    scrollY = window.scrollY;\n    BODY.style.top = \"-\".concat(scrollY, \"px\");\n    BODY.classList.add('js-scroll-prevent');\n  };\n\n  var restoreScroll = function restoreScroll() {\n    BODY.style.top = '';\n    BODY.classList.remove('js-scroll-prevent');\n    window.scrollTo(0, scrollY);\n  };\n\n  var handleToggleChange = function handleToggleChange(_ref) {\n    var target = _ref.target;\n    target.checked ? preventScroll() : restoreScroll();\n  };\n\n  TRIGGER.addEventListener('change', handleToggleChange);\n}();\n\n//# sourceURL=webpack://sushiboys/./src/js/module/navigation.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/contact.js");
/******/ 	
/******/ })()
;