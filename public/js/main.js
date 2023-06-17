/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/blog.js":
/*!************************!*\
  !*** ./src/js/blog.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_testimonials_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/testimonials.json */ \"./src/data/testimonials.json\");\n\r\n\r\n\r\nconst testimonialsUsers = _data_testimonials_json__WEBPACK_IMPORTED_MODULE_0__;\r\nconst container = document.querySelector(\".section_blog\");\r\nconst blogDiv = document.querySelector(\".blog\");\r\nconst blogLogo = blogDiv.querySelector(\".blog__icon\");\r\nconst blogLogoPic = blogDiv.querySelector('[type]');\r\nconst blogText = blogDiv.querySelector(\".blog__text\");\r\n\r\nclass Blog{\r\n  constructor(user, index, photoblock){\r\n    this.img = user.img;\r\n    this.logo = user.logo;\r\n    this.text = user.text;\r\n    this.index = index;\r\n    this.photoblock = photoblock;\r\n  }\r\n  makeActive(e){\r\n    const imgArray = container.querySelectorAll(\".blog_photo\");\r\n    imgArray.forEach((cur)=>{\r\n        cur.classList.remove(\"active\");\r\n    });\r\n    e.target.classList.add(\"active\");\r\n  }\r\n  makeContent(){\r\n    const divUser = document.createElement(\"img\");\r\n    divUser.classList.add(\"blog_photo\");\r\n    divUser.src = this.img;\r\n    if (this.index === 0){\r\n      divUser.classList.add(\"active\");\r\n      blogLogo.src = this.logo;\r\n      blogLogoPic.srcset = this.logo.replace(\"jpg\", \"webp\");\r\n      blogLogoPic.srcset = this.logo.replace(\"png\", \"webp\");\r\n      blogText.textContent = `\" ${this.text} \"`;\r\n     }\r\n    divUser.addEventListener(\"click\", (e)=>{\r\n      this.makeActive(e);\r\n      blogLogo.src = this.logo;\r\n      blogText.textContent = `\" ${this.text} \"`;\r\n      blogLogoPic.srcset = this.logo.replace(\"jpg\", \"webp\");\r\n      blogLogoPic.srcset = this.logo.replace(\"png\", \"webp\");\r\n    });\r\n    this.photoblock.append(divUser);\r\n  }\r\n}\r\n\r\nconst photos = container.querySelectorAll(\".photo\");\r\nphotos.forEach((cur, index)=>{\r\n  const item = new Blog(testimonialsUsers[index], index, cur);\r\n  item.makeContent();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://Food/./src/js/blog.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ (function() {

eval("// -----------------------------------------\r\n// -------Add _touch and _pc classes to body\r\n// -----------------------------------------\r\nclass detectMob{\r\n  constructor(){\r\n    this.toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];  \r\n  }\r\n  detectMob(){\r\n    return this.toMatch.some((toMatchItem) => {\r\n      return navigator.userAgent.match(toMatchItem);\r\n    })\r\n  }\r\n  addClasses(){\r\n    if (this.detectMob()){\r\n      document.body.classList.add('_touch');\r\n      // add arrows to all submenu in menu\r\n      let menuArrows = document.querySelectorAll(\".menu__arrow\");\r\n       menuArrows.forEach((cur, i)=>{\r\n          cur.addEventListener(\"click\", (e)=>{\r\n          cur.parentElement.classList.toggle('_active');\r\n          });\r\n        });\r\n    }\r\n    else{\r\n      // document.body.classList.add('_touch');\r\n      document.body.classList.add('_pc');\r\n    }\r\n  }\r\n}\r\n\r\nconst checkMob = new detectMob().addClasses();\r\n\r\n// ------------------------\r\n// --------Burger----------\r\n// ------------------------\r\n\r\nconst iconMenu = document.querySelector(\".menu__icon\");\r\nif (iconMenu){\r\n  iconMenu.addEventListener(\"click\", (e)=>{\r\n    const menuBody = document.querySelector(\".menu__body\");\r\n    menuBody.classList.toggle(\"_active\");\r\n    iconMenu.classList.toggle(\"_active\");\r\n  });\r\n}\r\n// -----------------------------\r\n// -------Scroll on click-------\r\n// -----------------------------\r\nconst menuLinks = document.querySelectorAll('.menu__link[data-goto]');\r\nif (menuLinks.length > 0){\r\n  menuLinks.forEach(item=>{\r\n    item.addEventListener(\"click\", (e)=>{\r\n      const menuLink = e.target;\r\n      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){\r\n        const gotoBlock = document.querySelector(menuLink.dataset.goto); \r\n        // const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;\r\n        // if header position = fixed\r\n        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;\r\n        window.scrollTo({\r\n          top: gotoBlockValue,\r\n          behavior: \"smooth\"\r\n        });\r\n        e.preventDefault();\r\n      }\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://Food/./src/js/menu.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (function() {

eval("document.addEventListener(\"DOMLoaded\", () => {\r\n\r\n   include(\"menu.js\");\r\n   include(\"blog.js\");\r\n\r\n})\n\n//# sourceURL=webpack://Food/./src/js/script.js?");

/***/ }),

/***/ "./src/data/testimonials.json":
/*!************************************!*\
  !*** ./src/data/testimonials.json ***!
  \************************************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('[{\"img\":\"img/testimonials/say1.webp\",\"logo\":\"img/testimonials/avatar1.jpg\",\"text\":\"Great place to spend your vacation while exploring different experiences.\"},{\"img\":\"img/testimonials/say2.webp\",\"logo\":\"img/testimonials/avatar2.jpg\",\"text\":\"Is was a great experience, you can proud of your country.\"},{\"img\":\"img/testimonials/say3.webp\",\"logo\":\"img/testimonials/avatar3.jpg\",\"text\":\"The guides at a minimum did their level best and performed as might be expected.\"},{\"img\":\"img/testimonials/say4.webp\",\"logo\":\"img/testimonials/avatar4.jpg\",\"text\":\"Both tours were really enjoyable. The guides on both were excellent; they were very informative and I learnt a lot. \"},{\"img\":\"img/testimonials/say1.webp\",\"logo\":\"img/testimonials/avatar5.webp\",\"text\":\"Unreliable. Pick-up service didn\\'t work for 2 female travelers.\"}]');\n\n//# sourceURL=webpack://Food/./src/data/testimonials.json?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/blog.js");
/******/ 	__webpack_require__("./src/js/menu.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;