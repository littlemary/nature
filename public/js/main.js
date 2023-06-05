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

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (function() {

eval("document.addEventListener(\"DOMLoaded\", () => {\r\n\r\n   include(\"testimonials.js\");\r\n\r\n})\n\n//# sourceURL=webpack://Food/./src/js/script.js?");

/***/ }),

/***/ "./src/js/testimonials.js":
/*!********************************!*\
  !*** ./src/js/testimonials.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_testimonials_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/testimonials.json */ \"./src/data/testimonials.json\");\n\r\nconst container = document.querySelector(\".container__photo\");\r\n\r\nconst testimonialsUsers = _data_testimonials_json__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\nconst sayDiv = document.querySelector(\".say\");\r\nconst sayLogo = sayDiv.querySelector(\".say__icon\");\r\nconst sayText = sayDiv.querySelector(\".say__text\");\r\n\r\nclass TestimonialsItem{\r\n  constructor(user, index, countOnPage, realCount=4){\r\n    this.realCount = realCount;\r\n    this.index = index + 1;\r\n    this.posClass = \"pos1\";\r\n    switch (this.realCount){\r\n      case 1: this.posClass =`poscenter`; break;\r\n      case 2: this.posClass =`pos${index + 1}`; break; // 1 2\r\n      case 3: this.posClass =`pos${index + 1}`; break; // 2 3 4\r\n      case 4: this.posClass =`pos${index + 1}`; break; //1 2 3 4\r\n    }\r\n\r\n    this.img = user.img;\r\n    this.logo = user.logo;\r\n    this.text = user.text;\r\n    this.countOnPage = countOnPage;\r\n  }\r\n  makeActive(e){\r\n    const imgArray = container.querySelectorAll(\".testimonials_photo\");\r\n    imgArray.forEach((cur)=>{\r\n        cur.classList.remove(\"active\");\r\n    });\r\n    e.target.classList.add(\"active\");\r\n  }\r\n  makeContent(){\r\n    const divUser = document.createElement(\"img\");\r\n    divUser.classList.add(\"testimonials_photo\");\r\n    divUser.src = this.img;\r\n    divUser.classList.add(this.posClass);\r\n    //mobile version\r\n    // if (this.countOnPage == 1){\r\n    //   divUser.classList.add(`poscenter`);\r\n    // }\r\n    // //tablets and PC version\r\n    // else{\r\n    //   divUser.classList.add(`pos${this.index}`);\r\n    // }\r\n    if (this.index === 1){\r\n      divUser.classList.add(\"active\");\r\n      sayLogo.src = this.logo;\r\n      sayText.textContent = `\" ${this.text} \"`;\r\n    }\r\n    divUser.addEventListener(\"click\", (e)=>{\r\n      this.makeActive(e);\r\n      sayLogo.src = this.logo;\r\n      sayText.textContent = `\" ${this.text} \"`;\r\n    });\r\n    container.append(divUser);\r\n  }\r\n}\r\n\r\n\r\nclass TestimonialsPhoto{\r\n  constructor(start_index = 0){\r\n    this.start_index = start_index;\r\n    // this.window_width = window.innerWidth;\r\n    // this.window_width = screen.width;\r\n    this.window_width = Math.max(document.documentElement.clientWidth, window.innerWidth);\r\n    this.countOnPage = 4;\r\n    this.showNext = false;\r\n    this.showPrev = false;\r\n    this.end_index = this.start_index + this.countOnPage;\r\n    if (this.end_index > testimonialsUsers.length){\r\n      this.end_index = testimonialsUsers.length;\r\n    }\r\n  };\r\n\r\n  makePhotoClasses(){\r\n    // console.log(this.window_width);\r\n    switch (true) {\r\n      case (this.window_width < 768):  this.countOnPage = 1; break;\r\n      case (this.window_width >= 768 && this.window_width <= 992): this.countOnPage = 2; break;\r\n      case (this.window_width >= 992 && this.window_width <= 1200): this.countOnPage=3; break;\r\n    }\r\n    this.end_index = this.start_index + this.countOnPage;\r\n    if (this.end_index > testimonialsUsers.length){\r\n      this.end_index = testimonialsUsers.length;\r\n    }\r\n  }\r\n  makeArrow(type=\"prev\"){\r\n    const arrow = document.createElement(\"a\");\r\n    arrow.classList.add(\"testimonials_arrow\");\r\n    if (  (type==\"prev\" && !this.showPrev) || (type==\"next\" && !this.showNext) ){\r\n            arrow.textContent = ' ';\r\n            container.append(arrow);\r\n            return;\r\n          }\r\n    switch (type){\r\n      case \"prev\": \r\n        arrow.textContent = \"<\";\r\n        arrow.addEventListener(\"click\", () => {\r\n          this.start_index-= this.countOnPage;\r\n          this.end_index = this.start_index + this.countOnPage;\r\n          if (this.end_index > testimonialsUsers.length){\r\n            this.end_index = testimonialsUsers.length;\r\n          }\r\n          this.makePhotosArray();\r\n        });\r\n        break;\r\n      case \"next\":\r\n        arrow.textContent = \">\";\r\n        arrow.addEventListener(\"click\", () => {\r\n          this.start_index+= this.countOnPage;\r\n          this.end_index = this.start_index + this.countOnPage;\r\n          if (this.end_index > testimonialsUsers.length){\r\n            this.end_index = testimonialsUsers.length;\r\n          }\r\n          this.makePhotosArray();\r\n        });\r\n    }\r\n    container.append(arrow);\r\n  }\r\n  makePhotosArray(){\r\n    this.makePhotoClasses();\r\n    container.innerHTML = '';\r\n    this.showPrev = (this.start_index==0)?false:true;\r\n    this.showNext = ((this.start_index + this.countOnPage) < testimonialsUsers.length) ? true : false;\r\n\r\n    this.makeArrow(\"prev\");\r\n    // if (this.start_index > 0){\r\n    //   this.makeArrow(\"prev\");\r\n    // }    \r\n    const usersArr = testimonialsUsers.slice(this.start_index, this.end_index);\r\n    const realCount = usersArr.length;\r\n    usersArr.forEach((cur, i)=>{\r\n      const item = new TestimonialsItem(cur, i, this.countOnPage, realCount);\r\n      item.makeContent();\r\n    });\r\n\r\n    // if ((this.start_index + this.countOnPage) < testimonialsUsers.length){\r\n    //   this.makeArrow(\"next\");\r\n    // }\r\n    this.makeArrow(\"next\");\r\n  }\r\n}\r\n\r\nconst mainContent = new TestimonialsPhoto();\r\nmainContent.makePhotosArray();\r\n\r\nwindow.addEventListener(\"resize\", mainContent.makePhotosArray());\n\n//# sourceURL=webpack://Food/./src/js/testimonials.js?");

/***/ }),

/***/ "./src/data/testimonials.json":
/*!************************************!*\
  !*** ./src/data/testimonials.json ***!
  \************************************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('[{\"img\":\"img/testimonials/say1.webp\",\"logo\":\"img/testimonials/avatar.png\",\"text\":\"1 Great place to spend your vacation while exploring different experiences.\"},{\"img\":\"img/testimonials/say2.webp\",\"logo\":\"img/testimonials/avatar.png\",\"text\":\"2 Great place to spend your vacation while exploring different experiences.\"},{\"img\":\"img/testimonials/say3.webp\",\"logo\":\"img/testimonials/avatar.png\",\"text\":\"3 Great place to spend your vacation while exploring different experiences.\"},{\"img\":\"img/testimonials/say4.webp\",\"logo\":\"img/testimonials/avatar.png\",\"text\":\"4 Great place to spend your vacation while exploring different experiences.\"},{\"img\":\"img/testimonials/say4.webp\",\"logo\":\"img/testimonials/avatar.png\",\"text\":\"4 Great place to spend your vacation while exploring different experiences.\"}]');\n\n//# sourceURL=webpack://Food/./src/data/testimonials.json?");

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
/******/ 	__webpack_require__("./src/js/script.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/testimonials.js");
/******/ 	
/******/ })()
;