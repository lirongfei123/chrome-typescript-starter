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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/content.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/content.css":
/*!****************************!*\
  !*** ./src/js/content.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29udGVudC5jc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udGVudC5jc3M/OTFlMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/content.css\n");

/***/ }),

/***/ "./src/js/content.ts":
/*!***************************!*\
  !*** ./src/js/content.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.css */ \"./src/js/content.css\");\n/* harmony import */ var _content_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_css__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getHotElement() {\n    var aHot = document.querySelector('a[href^=\"https://top.baidu.com/board\"]');\n    if (aHot) {\n        var currentNode = aHot;\n        var parentNode = aHot === null || aHot === void 0 ? void 0 : aHot.parentNode;\n        while (parentNode) {\n            // @ts-ignore\n            if (parentNode.id == 'content_right') {\n                return currentNode;\n            }\n            else {\n                // @ts-ignore\n                currentNode = parentNode;\n                parentNode = parentNode.parentNode;\n            }\n        }\n    }\n    else {\n        return null;\n    }\n}\nfunction run() {\n    var _a;\n    var hotContainer = getHotElement();\n    var pingbi = document.getElementById('baidu_hot_pingbi');\n    if (!pingbi) {\n        pingbi = document.createElement('div');\n        pingbi.id = 'baidu_hot_pingbi';\n        // @ts-ignore\n        pingbi.innerHTML = '不显示热搜';\n    }\n    if (hotContainer) {\n        // @ts-ignore\n        hotContainer.style.display = 'none';\n        (_a = hotContainer.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(pingbi);\n    }\n}\nsetInterval(run, 5000);\nrun();\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29udGVudC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9jb250ZW50LnRzPzNiYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2NvbnRlbnQuY3NzJztcbmZ1bmN0aW9uIGdldEhvdEVsZW1lbnQoKSB7XG4gICAgdmFyIGFIb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhW2hyZWZePVwiaHR0cHM6Ly90b3AuYmFpZHUuY29tL2JvYXJkXCJdJyk7XG4gICAgaWYgKGFIb3QpIHtcbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gYUhvdDtcbiAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhSG90ID09PSBudWxsIHx8IGFIb3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFIb3QucGFyZW50Tm9kZTtcbiAgICAgICAgd2hpbGUgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmIChwYXJlbnROb2RlLmlkID09ICdjb250ZW50X3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuZnVuY3Rpb24gcnVuKCkge1xuICAgIHZhciBfYTtcbiAgICB2YXIgaG90Q29udGFpbmVyID0gZ2V0SG90RWxlbWVudCgpO1xuICAgIHZhciBwaW5nYmkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFpZHVfaG90X3BpbmdiaScpO1xuICAgIGlmICghcGluZ2JpKSB7XG4gICAgICAgIHBpbmdiaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwaW5nYmkuaWQgPSAnYmFpZHVfaG90X3BpbmdiaSc7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcGluZ2JpLmlubmVySFRNTCA9ICfkuI3mmL7npLrng63mkJwnO1xuICAgIH1cbiAgICBpZiAoaG90Q29udGFpbmVyKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaG90Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIChfYSA9IGhvdENvbnRhaW5lci5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQocGluZ2JpKTtcbiAgICB9XG59XG5zZXRJbnRlcnZhbChydW4sIDUwMDApO1xucnVuKCk7XG5leHBvcnQgZGVmYXVsdCB7fTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/content.ts\n");

/***/ })

/******/ });