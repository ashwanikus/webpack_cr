/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cart.html":
/*!***********************!*\
  !*** ./src/cart.html ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"cart.html\";\n\n//# sourceURL=webpack:///./src/cart.html?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"index.html\";\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../src/index.html */ \"./src/index.html\");\r\n__webpack_require__(/*! ../../src/login.html */ \"./src/login.html\");\r\n__webpack_require__(/*! ../../src/signup.html */ \"./src/signup.html\");\r\n__webpack_require__(/*! ../../src/cart.html */ \"./src/cart.html\");\r\n__webpack_require__(/*! ../../src/products.html */ \"./src/products.html\");\r\n\r\nconst header = `<div class=\"row\">\r\n<nav>\r\n  <a href=\"#\" class=\"logo\">\r\n    <img src=\"./images/logo.png\" alt=\"Sabka Bazaar\" srcset=\"\" class=\"logo\">\r\n  </a>\r\n  <div>\r\n\r\n\r\n    <input type=\"checkbox\" id=\"hamberger\" />\r\n\r\n    <label class=\"nav_btn\" for=\"hamberger\">\r\n\r\n      <div class=\"center\">\r\n        <div class=\"icon\">\r\n          <span class=\"bar1\"></span>\r\n          <span class=\"bar2\"></span>\r\n          <span class=\"bar3\"></span>\r\n        </div>\r\n      </div>\r\n    </label>\r\n    <span class=\"cart_btn\">\r\n      <a href=\"cart.html\" class=\"btn_to_cart\">\r\n        <i class=\"cart_icon\">\r\n          <svg version=\"1.1\" width=\"30\" id=\"Layer_1\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"\r\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\"\r\n            style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\r\n            <path\r\n              d=\"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z\" />\r\n          </svg>\r\n          <span>0</span>\r\n        </i>\r\n        <span>0 items</span>\r\n      </a>\r\n    </span>\r\n    <div class=\"nav_link\">\r\n      <ul class=\"align_left\">\r\n        <li><a href=\"index.html\">Home</a></li>\r\n        <li><a href=\"products.html\">Products</a></li>\r\n      </ul>\r\n      <ul class=\"align_right\">\r\n        <li><a href=\"login.html\">SignIn</a></li>\r\n        <li><a href=\"signup.html\">Register</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n</div>`;\r\n\r\n\r\n\r\nconst footer = `<section class=\"row\">\r\n                <p>\r\n                    Copyright &copy; 2011 &mdash; 2018 Sabka Bazaar Grocery Supplies Pvt Ltd\r\n                </p>\r\n                </section>`;\r\n\r\n(function () {\r\n    document.getElementById(\"header\").innerHTML = header;\r\n    document.getElementById(\"footer\").innerHTML = footer;\r\n})();\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/login.html":
/*!************************!*\
  !*** ./src/login.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"login.html\";\n\n//# sourceURL=webpack:///./src/login.html?");

/***/ }),

/***/ "./src/products.html":
/*!***************************!*\
  !*** ./src/products.html ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"products.html\";\n\n//# sourceURL=webpack:///./src/products.html?");

/***/ }),

/***/ "./src/signup.html":
/*!*************************!*\
  !*** ./src/signup.html ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"signup.html\";\n\n//# sourceURL=webpack:///./src/signup.html?");

/***/ })

/******/ });