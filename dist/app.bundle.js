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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/accessories-doll-dacorator/doll-decorator-factory.ts":
/*!******************************************************************!*\
  !*** ./src/accessories-doll-dacorator/doll-decorator-factory.ts ***!
  \******************************************************************/
/*! exports provided: ACCESSORY_DECORATORS, DollDecoratorFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESSORY_DECORATORS", function() { return ACCESSORY_DECORATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DollDecoratorFactory", function() { return DollDecoratorFactory; });
/* harmony import */ var _ear_rings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ear-rings */ "./src/accessories-doll-dacorator/ear-rings.ts");
/* harmony import */ var _wrist_watch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrist-watch */ "./src/accessories-doll-dacorator/wrist-watch.ts");
/* harmony import */ var _hat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hat */ "./src/accessories-doll-dacorator/hat.ts");
/* harmony import */ var _goggels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goggels */ "./src/accessories-doll-dacorator/goggels.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ACCESSORY_DECORATORS = {
  EAR_RING: "decorate-with-ear-ring",
  WRIST_WATCH: "decorate-with-wrist-watch",
  HAT: "decorate-with-hat",
  GOGGLES: "decorate-with-goggles"
};
var DollDecoratorFactory =
/*#__PURE__*/
function () {
  function DollDecoratorFactory() {
    _classCallCheck(this, DollDecoratorFactory);
  }

  _createClass(DollDecoratorFactory, null, [{
    key: "create",
    value: function create(name, dollRef, decoratorWith) {
      switch (name) {
        case ACCESSORY_DECORATORS.EAR_RING:
          return new _ear_rings__WEBPACK_IMPORTED_MODULE_0__["EarRingsDollDecorator"](dollRef, decoratorWith);

        case ACCESSORY_DECORATORS.WRIST_WATCH:
          return new _wrist_watch__WEBPACK_IMPORTED_MODULE_1__["WristWatchDollDecorator"](dollRef, decoratorWith);

        case ACCESSORY_DECORATORS.HAT:
          return new _hat__WEBPACK_IMPORTED_MODULE_2__["HatDollDecorator"](dollRef, decoratorWith);

        case ACCESSORY_DECORATORS.GOGGLES:
          return new _goggels__WEBPACK_IMPORTED_MODULE_3__["GogglesDollDecorator"](dollRef, decoratorWith);
      }

      return null;
    }
  }]);

  return DollDecoratorFactory;
}();

/***/ }),

/***/ "./src/accessories-doll-dacorator/ear-rings.ts":
/*!*****************************************************!*\
  !*** ./src/accessories-doll-dacorator/ear-rings.ts ***!
  \*****************************************************/
/*! exports provided: EarRingsDollDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarRingsDollDecorator", function() { return EarRingsDollDecorator; });
/* harmony import */ var _doll_doll_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../doll/doll-decorator */ "./src/doll/doll-decorator.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var EarRingsDollDecorator =
/*#__PURE__*/
function (_DollDecorator) {
  _inherits(EarRingsDollDecorator, _DollDecorator);

  function EarRingsDollDecorator(dollRef, earRing) {
    var _this;

    _classCallCheck(this, EarRingsDollDecorator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EarRingsDollDecorator).call(this, dollRef));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "earRing", void 0);

    _this.earRing = earRing;
    return _this;
  }

  _createClass(EarRingsDollDecorator, [{
    key: "getWearItemsCost",
    value: function getWearItemsCost() {
      var otherCost = this.doll.getWearItemsCost();
      var cost = this.earRing.getCost();
      return otherCost == 0 ? cost : otherCost + cost;
    }
  }, {
    key: "whatAreYouWearing",
    value: function whatAreYouWearing() {
      var item = this.doll.whatAreYouWearing();
      var description = this.earRing.getType();

      if (item.length > 0) {
        return "".concat(item, ", ").concat(description);
      }

      return description;
    }
  }]);

  return EarRingsDollDecorator;
}(_doll_doll_decorator__WEBPACK_IMPORTED_MODULE_0__["DollDecorator"]);

/***/ }),

/***/ "./src/accessories-doll-dacorator/goggels.ts":
/*!***************************************************!*\
  !*** ./src/accessories-doll-dacorator/goggels.ts ***!
  \***************************************************/
/*! exports provided: GogglesDollDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GogglesDollDecorator", function() { return GogglesDollDecorator; });
/* harmony import */ var _doll_doll_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../doll/doll-decorator */ "./src/doll/doll-decorator.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var GogglesDollDecorator =
/*#__PURE__*/
function (_DollDecorator) {
  _inherits(GogglesDollDecorator, _DollDecorator);

  function GogglesDollDecorator(dollRef, gogglesRef) {
    var _this;

    _classCallCheck(this, GogglesDollDecorator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GogglesDollDecorator).call(this, dollRef));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "gogglesRef", void 0);

    _this.gogglesRef = gogglesRef;
    return _this;
  }

  _createClass(GogglesDollDecorator, [{
    key: "getWearItemsCost",
    value: function getWearItemsCost() {
      var otherCost = this.doll.getWearItemsCost();
      var cost = this.gogglesRef.getCost();
      return otherCost == 0 ? cost : otherCost + cost;
    }
  }, {
    key: "whatAreYouWearing",
    value: function whatAreYouWearing() {
      var item = this.doll.whatAreYouWearing();
      var type = this.gogglesRef.getType();
      var brand = this.gogglesRef.getBrand();

      if (item.length > 0) {
        return "".concat(item, " , ").concat(brand, " ").concat(type);
      }

      return "".concat(brand, " ").concat(type);
    }
  }]);

  return GogglesDollDecorator;
}(_doll_doll_decorator__WEBPACK_IMPORTED_MODULE_0__["DollDecorator"]);

/***/ }),

/***/ "./src/accessories-doll-dacorator/hat.ts":
/*!***********************************************!*\
  !*** ./src/accessories-doll-dacorator/hat.ts ***!
  \***********************************************/
/*! exports provided: HatDollDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HatDollDecorator", function() { return HatDollDecorator; });
/* harmony import */ var _doll_doll_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../doll/doll-decorator */ "./src/doll/doll-decorator.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var HatDollDecorator =
/*#__PURE__*/
function (_DollDecorator) {
  _inherits(HatDollDecorator, _DollDecorator);

  function HatDollDecorator(dollRef, hat) {
    var _this;

    _classCallCheck(this, HatDollDecorator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HatDollDecorator).call(this, dollRef));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hat", void 0);

    _this.hat = hat;
    return _this;
  }

  _createClass(HatDollDecorator, [{
    key: "getWearItemsCost",
    value: function getWearItemsCost() {
      var otherCost = this.doll.getWearItemsCost();
      var cost = this.hat.getCost();
      return otherCost == 0 ? cost : otherCost + cost;
    }
  }, {
    key: "whatAreYouWearing",
    value: function whatAreYouWearing() {
      var item = this.doll.whatAreYouWearing();
      var type = this.hat.getType();

      if (item.length > 0) {
        return "".concat(item, ", ").concat(type);
      }

      return type;
    }
  }]);

  return HatDollDecorator;
}(_doll_doll_decorator__WEBPACK_IMPORTED_MODULE_0__["DollDecorator"]);

/***/ }),

/***/ "./src/accessories-doll-dacorator/wrist-watch.ts":
/*!*******************************************************!*\
  !*** ./src/accessories-doll-dacorator/wrist-watch.ts ***!
  \*******************************************************/
/*! exports provided: WristWatchDollDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WristWatchDollDecorator", function() { return WristWatchDollDecorator; });
/* harmony import */ var _doll_doll_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../doll/doll-decorator */ "./src/doll/doll-decorator.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var WristWatchDollDecorator =
/*#__PURE__*/
function (_DollDecorator) {
  _inherits(WristWatchDollDecorator, _DollDecorator);

  function WristWatchDollDecorator(dollRef, wristWatch) {
    var _this;

    _classCallCheck(this, WristWatchDollDecorator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WristWatchDollDecorator).call(this, dollRef));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "wristWatch", void 0);

    _this.wristWatch = wristWatch;
    return _this;
  }

  _createClass(WristWatchDollDecorator, [{
    key: "getWearItemsCost",
    value: function getWearItemsCost() {
      var otherCost = this.doll.getWearItemsCost();
      var cost = this.wristWatch.getCost();
      return otherCost == 0 ? cost : otherCost + cost;
    }
  }, {
    key: "whatAreYouWearing",
    value: function whatAreYouWearing() {
      var item = this.doll.whatAreYouWearing();
      var type = this.wristWatch.getType();
      var brand = this.wristWatch.getBrand();

      if (item.length > 0) {
        return "item, ".concat(brand, " ").concat(type);
      }

      return "".concat(brand, " ").concat(type);
    }
  }]);

  return WristWatchDollDecorator;
}(_doll_doll_decorator__WEBPACK_IMPORTED_MODULE_0__["DollDecorator"]);

/***/ }),

/***/ "./src/accessories/accessoriesFactory.ts":
/*!***********************************************!*\
  !*** ./src/accessories/accessoriesFactory.ts ***!
  \***********************************************/
/*! exports provided: ACCESSORY_NAME, AccessoriesFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESSORY_NAME", function() { return ACCESSORY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoriesFactory", function() { return AccessoriesFactory; });
/* harmony import */ var _ear_rings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ear-rings */ "./src/accessories/ear-rings.ts");
/* harmony import */ var _goggles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goggles */ "./src/accessories/goggles.ts");
/* harmony import */ var _hat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hat */ "./src/accessories/hat.ts");
/* harmony import */ var _wrist_watch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrist-watch */ "./src/accessories/wrist-watch.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ACCESSORY_NAME = {
  EAR_RING: "ear-ring",
  GOGGLES: "goggles",
  HAT: "hat",
  WRIST_WATCH: "writ watch"
};
var AccessoriesFactory =
/*#__PURE__*/
function () {
  function AccessoriesFactory() {
    _classCallCheck(this, AccessoriesFactory);
  }

  _createClass(AccessoriesFactory, null, [{
    key: "create",
    value: function create(name) {
      switch (name) {
        case ACCESSORY_NAME.EAR_RING:
          return new _ear_rings__WEBPACK_IMPORTED_MODULE_0__["EarRing"]();

        case ACCESSORY_NAME.GOGGLES:
          return new _goggles__WEBPACK_IMPORTED_MODULE_1__["Goggle"]();

        case ACCESSORY_NAME.HAT:
          return new _hat__WEBPACK_IMPORTED_MODULE_2__["Hat"]();

        case ACCESSORY_NAME.WRIST_WATCH:
          return new _wrist_watch__WEBPACK_IMPORTED_MODULE_3__["WristWatch"]();
      }

      return null;
    }
  }]);

  return AccessoriesFactory;
}();

/***/ }),

/***/ "./src/accessories/ear-rings.ts":
/*!**************************************!*\
  !*** ./src/accessories/ear-rings.ts ***!
  \**************************************/
/*! exports provided: EarRing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarRing", function() { return EarRing; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EarRing =
/*#__PURE__*/
function () {
  function EarRing() {
    _classCallCheck(this, EarRing);

    _defineProperty(this, "cost", 10);

    _defineProperty(this, "type", "artificial ear ring");

    _defineProperty(this, "shape", "circle");
  }

  _createClass(EarRing, [{
    key: "initialize",
    value: function initialize(type, cost, shape) {
      this.cost = cost;
      this.type = type;
      this.shape = shape;
    }
  }, {
    key: "getCost",
    value: function getCost() {
      return this.cost;
    }
  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }]);

  return EarRing;
}();

/***/ }),

/***/ "./src/accessories/goggles.ts":
/*!************************************!*\
  !*** ./src/accessories/goggles.ts ***!
  \************************************/
/*! exports provided: Goggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Goggle", function() { return Goggle; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Goggle =
/*#__PURE__*/
function () {
  function Goggle() {
    _classCallCheck(this, Goggle);

    _defineProperty(this, "cost", 4000);

    _defineProperty(this, "type", "goggles");

    _defineProperty(this, "brand", "RayBen");
  }

  _createClass(Goggle, [{
    key: "initialize",
    value: function initialize(type, cost, brand) {
      this.cost = cost;
      this.type = type;
      this.brand = brand;
    }
  }, {
    key: "getCost",
    value: function getCost() {
      return this.cost;
    }
  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }, {
    key: "getBrand",
    value: function getBrand() {
      return this.brand;
    }
  }]);

  return Goggle;
}();

/***/ }),

/***/ "./src/accessories/hat.ts":
/*!********************************!*\
  !*** ./src/accessories/hat.ts ***!
  \********************************/
/*! exports provided: Hat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hat", function() { return Hat; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Hat =
/*#__PURE__*/
function () {
  function Hat() {
    _classCallCheck(this, Hat);

    _defineProperty(this, "cost", 100);

    _defineProperty(this, "type", "hat");
  }

  _createClass(Hat, [{
    key: "initialize",
    value: function initialize(type, cost) {
      this.cost = cost;
      this.type = type;
    }
  }, {
    key: "getCost",
    value: function getCost() {
      return this.cost;
    }
  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }]);

  return Hat;
}();

/***/ }),

/***/ "./src/accessories/wrist-watch.ts":
/*!****************************************!*\
  !*** ./src/accessories/wrist-watch.ts ***!
  \****************************************/
/*! exports provided: WristWatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WristWatch", function() { return WristWatch; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WristWatch =
/*#__PURE__*/
function () {
  function WristWatch() {
    _classCallCheck(this, WristWatch);

    _defineProperty(this, "cost", 3000);

    _defineProperty(this, "type", "wrist watch");

    _defineProperty(this, "brand", "TAG");
  }

  _createClass(WristWatch, [{
    key: "initialize",
    value: function initialize(type, cost, brand) {
      this.cost = cost;
      this.type = type;
      this.brand = brand;
    }
  }, {
    key: "getCost",
    value: function getCost() {
      return this.cost;
    }
  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }, {
    key: "getBrand",
    value: function getBrand() {
      return this.brand;
    }
  }]);

  return WristWatch;
}();

/***/ }),

/***/ "./src/doll/doll-decorator.ts":
/*!************************************!*\
  !*** ./src/doll/doll-decorator.ts ***!
  \************************************/
/*! exports provided: DollDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DollDecorator", function() { return DollDecorator; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DollDecorator =
/*#__PURE__*/
function () {
  function DollDecorator(dollRef) {
    _classCallCheck(this, DollDecorator);

    _defineProperty(this, "doll", void 0);

    this.doll = dollRef;
  }

  _createClass(DollDecorator, [{
    key: "getWearItemsCost",
    value: function getWearItemsCost() {
      return this.doll.getWearItemsCost();
    }
  }, {
    key: "whatAreYouWearing",
    value: function whatAreYouWearing() {
      return this.doll.whatAreYouWearing();
    }
  }]);

  return DollDecorator;
}();

/***/ }),

/***/ "./src/doll/doll.ts":
/*!**************************!*\
  !*** ./src/doll/doll.ts ***!
  \**************************/
/*! exports provided: Doll, DollFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doll", function() { return Doll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DollFactory", function() { return DollFactory; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Doll =
/*#__PURE__*/
function () {
  function Doll() {
    _classCallCheck(this, Doll);
  }

  _createClass(Doll, [{
    key: "getWearItemsCost",
    value: function getWearItemsCost() {
      return 0;
    }
  }, {
    key: "whatAreYouWearing",
    value: function whatAreYouWearing() {
      return "";
    }
  }]);

  return Doll;
}();
var DollFactory =
/*#__PURE__*/
function () {
  function DollFactory() {
    _classCallCheck(this, DollFactory);
  }

  _createClass(DollFactory, null, [{
    key: "create",
    value: function create() {
      return new Doll();
    }
  }]);

  return DollFactory;
}();

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _doll_doll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doll/doll */ "./src/doll/doll.ts");
/* harmony import */ var _accessories_accessoriesFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accessories/accessoriesFactory */ "./src/accessories/accessoriesFactory.ts");
/* harmony import */ var _accessories_doll_dacorator_doll_decorator_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accessories-doll-dacorator/doll-decorator-factory */ "./src/accessories-doll-dacorator/doll-decorator-factory.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Bootstrap =
/*#__PURE__*/
function () {
  function Bootstrap() {
    _classCallCheck(this, Bootstrap);
  }

  _createClass(Bootstrap, [{
    key: "initialize",
    value: function initialize() {
      var dollOne = _doll_doll__WEBPACK_IMPORTED_MODULE_0__["DollFactory"].create();
      var scottGoggles = _accessories_accessoriesFactory__WEBPACK_IMPORTED_MODULE_1__["AccessoriesFactory"].create(_accessories_accessoriesFactory__WEBPACK_IMPORTED_MODULE_1__["ACCESSORY_NAME"].GOGGLES);
      dollOne = _accessories_doll_dacorator_doll_decorator_factory__WEBPACK_IMPORTED_MODULE_2__["DollDecoratorFactory"].create(_accessories_doll_dacorator_doll_decorator_factory__WEBPACK_IMPORTED_MODULE_2__["ACCESSORY_DECORATORS"].GOGGLES, dollOne, scottGoggles);
      console.log(dollOne.whatAreYouWearing());
      console.log(dollOne.getWearItemsCost());
      var goldEarRing = _accessories_accessoriesFactory__WEBPACK_IMPORTED_MODULE_1__["AccessoriesFactory"].create(_accessories_accessoriesFactory__WEBPACK_IMPORTED_MODULE_1__["ACCESSORY_NAME"].EAR_RING);
      goldEarRing.initialize("gold ear ring", 10000, "circular");
      dollOne = _accessories_doll_dacorator_doll_decorator_factory__WEBPACK_IMPORTED_MODULE_2__["DollDecoratorFactory"].create(_accessories_doll_dacorator_doll_decorator_factory__WEBPACK_IMPORTED_MODULE_2__["ACCESSORY_DECORATORS"].EAR_RING, dollOne, goldEarRing);
      console.log(dollOne.whatAreYouWearing());
      console.log(dollOne.getWearItemsCost());
      var dollTwo = _doll_doll__WEBPACK_IMPORTED_MODULE_0__["DollFactory"].create();
    }
  }]);

  return Bootstrap;
}();

var boot = new Bootstrap();
boot.initialize();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY2Vzc29yaWVzLWRvbGwtZGFjb3JhdG9yL2RvbGwtZGVjb3JhdG9yLWZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY2Vzc29yaWVzLWRvbGwtZGFjb3JhdG9yL2Vhci1yaW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjZXNzb3JpZXMtZG9sbC1kYWNvcmF0b3IvZ29nZ2Vscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjZXNzb3JpZXMtZG9sbC1kYWNvcmF0b3IvaGF0LnRzIiwid2VicGFjazovLy8uL3NyYy9hY2Nlc3Nvcmllcy1kb2xsLWRhY29yYXRvci93cmlzdC13YXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjZXNzb3JpZXMvYWNjZXNzb3JpZXNGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9hY2Nlc3Nvcmllcy9lYXItcmluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY2Vzc29yaWVzL2dvZ2dsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY2Vzc29yaWVzL2hhdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjZXNzb3JpZXMvd3Jpc3Qtd2F0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbGwvZG9sbC1kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbGwvZG9sbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiQUNDRVNTT1JZX0RFQ09SQVRPUlMiLCJFQVJfUklORyIsIldSSVNUX1dBVENIIiwiSEFUIiwiR09HR0xFUyIsIkRvbGxEZWNvcmF0b3JGYWN0b3J5IiwibmFtZSIsImRvbGxSZWYiLCJkZWNvcmF0b3JXaXRoIiwiRWFyUmluZ3NEb2xsRGVjb3JhdG9yIiwiV3Jpc3RXYXRjaERvbGxEZWNvcmF0b3IiLCJIYXREb2xsRGVjb3JhdG9yIiwiR29nZ2xlc0RvbGxEZWNvcmF0b3IiLCJlYXJSaW5nIiwib3RoZXJDb3N0IiwiZG9sbCIsImdldFdlYXJJdGVtc0Nvc3QiLCJjb3N0IiwiZ2V0Q29zdCIsIml0ZW0iLCJ3aGF0QXJlWW91V2VhcmluZyIsImRlc2NyaXB0aW9uIiwiZ2V0VHlwZSIsImxlbmd0aCIsIkRvbGxEZWNvcmF0b3IiLCJnb2dnbGVzUmVmIiwidHlwZSIsImJyYW5kIiwiZ2V0QnJhbmQiLCJoYXQiLCJ3cmlzdFdhdGNoIiwiQUNDRVNTT1JZX05BTUUiLCJBY2Nlc3Nvcmllc0ZhY3RvcnkiLCJFYXJSaW5nIiwiR29nZ2xlIiwiSGF0IiwiV3Jpc3RXYXRjaCIsInNoYXBlIiwiRG9sbCIsIkRvbGxGYWN0b3J5IiwiQm9vdHN0cmFwIiwiZG9sbE9uZSIsImNyZWF0ZSIsInNjb3R0R29nZ2xlcyIsImNvbnNvbGUiLCJsb2ciLCJnb2xkRWFyUmluZyIsImluaXRpYWxpemUiLCJkb2xsVHdvIiwiYm9vdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7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Q0FBQ0ksT0FEbkIsRUFDNEJxQyxPQUQ1QixFQUNxQ0UsWUFEckMsQ0FBMUI7QUFFQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlKLE9BQU8sQ0FBQ3JCLGlCQUFSLEVBQVo7QUFDQXdCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixPQUFPLENBQUN6QixnQkFBUixFQUFaO0FBRUEsVUFBSThCLFdBQW9CLEdBQWNkLGtGQUFrQixDQUFDVSxNQUFuQixDQUEwQlgsOEVBQWMsQ0FBQzlCLFFBQXpDLENBQXRDO0FBQ0E2QyxpQkFBVyxDQUFDQyxVQUFaLENBQXVCLGVBQXZCLEVBQXdDLEtBQXhDLEVBQStDLFVBQS9DO0FBRUFOLGFBQU8sR0FBbUJwQyx1R0FBb0IsQ0FDN0JxQyxNQURTLENBQ0YxQyx1R0FBb0IsQ0FBQ0MsUUFEbkIsRUFDNkJ3QyxPQUQ3QixFQUNzQ0ssV0FEdEMsQ0FBMUI7QUFHQUYsYUFBTyxDQUFDQyxHQUFSLENBQVlKLE9BQU8sQ0FBQ3JCLGlCQUFSLEVBQVo7QUFDQXdCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixPQUFPLENBQUN6QixnQkFBUixFQUFaO0FBRUEsVUFBSWdDLE9BQXNCLEdBQUdULHNEQUFXLENBQUNHLE1BQVosRUFBN0I7QUFFSDs7Ozs7O0FBR0wsSUFBSU8sSUFBSSxHQUFHLElBQUlULFNBQUosRUFBWDtBQUNBUyxJQUFJLENBQUNGLFVBQUwsRyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBFYXJSaW5nc0RvbGxEZWNvcmF0b3IgfSBmcm9tIFwiLi9lYXItcmluZ3NcIjtcclxuaW1wb3J0IHsgSURvb2xEZWNvcmF0b3IgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JLWRvbGwtZGVjb3JhdG9yXCI7XHJcbmltcG9ydCB7IFdyaXN0V2F0Y2hEb2xsRGVjb3JhdG9yIH0gZnJvbSBcIi4vd3Jpc3Qtd2F0Y2hcIjtcclxuaW1wb3J0IHsgSGF0RG9sbERlY29yYXRvciB9IGZyb20gXCIuL2hhdFwiO1xyXG5pbXBvcnQgeyBHb2dnbGVzRG9sbERlY29yYXRvciB9IGZyb20gXCIuL2dvZ2dlbHNcIjtcclxuaW1wb3J0IHsgRG9sbERlY29yYXRvciB9IGZyb20gXCIuLi9kb2xsL2RvbGwtZGVjb3JhdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUNDRVNTT1JZX0RFQ09SQVRPUlMgPSB7XHJcbiAgICBFQVJfUklORzpcImRlY29yYXRlLXdpdGgtZWFyLXJpbmdcIixcclxuICAgIFdSSVNUX1dBVENIOlwiZGVjb3JhdGUtd2l0aC13cmlzdC13YXRjaFwiLFxyXG4gICAgSEFUOlwiZGVjb3JhdGUtd2l0aC1oYXRcIixcclxuICAgIEdPR0dMRVM6XCJkZWNvcmF0ZS13aXRoLWdvZ2dsZXNcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9sbERlY29yYXRvckZhY3Rvcnkge1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUobmFtZTpzdHJpbmcsIGRvbGxSZWY6SURvb2xEZWNvcmF0b3IsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb3JhdG9yV2l0aDphbnkpOklEb29sRGVjb3JhdG9yIHwgbnVsbHtcclxuICAgICAgICBzd2l0Y2gobmFtZSl7XHJcbiAgICAgICAgICAgIGNhc2UgQUNDRVNTT1JZX0RFQ09SQVRPUlMuRUFSX1JJTkc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVhclJpbmdzRG9sbERlY29yYXRvcihkb2xsUmVmLCBkZWNvcmF0b3JXaXRoKTtcclxuICAgICAgICAgICAgY2FzZSBBQ0NFU1NPUllfREVDT1JBVE9SUy5XUklTVF9XQVRDSDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV3Jpc3RXYXRjaERvbGxEZWNvcmF0b3IoZG9sbFJlZiwgZGVjb3JhdG9yV2l0aCk7XHJcbiAgICAgICAgICAgIGNhc2UgQUNDRVNTT1JZX0RFQ09SQVRPUlMuSEFUOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBIYXREb2xsRGVjb3JhdG9yKGRvbGxSZWYsIGRlY29yYXRvcldpdGgpO1xyXG4gICAgICAgICAgICBjYXNlIEFDQ0VTU09SWV9ERUNPUkFUT1JTLkdPR0dMRVM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdvZ2dsZXNEb2xsRGVjb3JhdG9yKGRvbGxSZWYsIGRlY29yYXRvcldpdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERvbGxEZWNvcmF0b3IgfSBmcm9tIFwiLi4vZG9sbC9kb2xsLWRlY29yYXRvclwiO1xyXG5pbXBvcnQgeyBJRG9vbERlY29yYXRvciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ktZG9sbC1kZWNvcmF0b3JcIjtcclxuaW1wb3J0IHsgSUVhclJpbmcgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWVhci1yaW5nXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRWFyUmluZ3NEb2xsRGVjb3JhdG9yIGV4dGVuZHMgRG9sbERlY29yYXRvciB7XHJcbiAgICBwcml2YXRlIGVhclJpbmc6SUVhclJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZG9sbFJlZjpJRG9vbERlY29yYXRvciwgZWFyUmluZzpJRWFyUmluZyl7XHJcbiAgICAgICAgc3VwZXIoZG9sbFJlZik7XHJcbiAgICAgICAgdGhpcy5lYXJSaW5nID0gZWFyUmluZztcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWFySXRlbXNDb3N0KCk6bnVtYmVyIHtcclxuICAgICAgICBsZXQgb3RoZXJDb3N0Om51bWJlciA9IHRoaXMuZG9sbC5nZXRXZWFySXRlbXNDb3N0KCk7XHJcbiAgICAgICAgbGV0IGNvc3Q6bnVtYmVyID0gIHRoaXMuZWFyUmluZy5nZXRDb3N0KClcclxuICAgICAgICByZXR1cm4gb3RoZXJDb3N0ID09IDAgPyBjb3N0IDogb3RoZXJDb3N0ICsgY29zdDtcclxuICAgIH1cclxuXHJcbiAgICB3aGF0QXJlWW91V2VhcmluZygpOnN0cmluZyB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmRvbGwud2hhdEFyZVlvdVdlYXJpbmcoKTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb246c3RyaW5nID0gdGhpcy5lYXJSaW5nLmdldFR5cGUoKTtcclxuICAgICAgICBpZihpdGVtLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7aXRlbSB9LCAke2Rlc2NyaXB0aW9ufWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjsgICAgIFxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERvbGxEZWNvcmF0b3IgfSBmcm9tIFwiLi4vZG9sbC9kb2xsLWRlY29yYXRvclwiO1xyXG5pbXBvcnQgeyBJRG9vbERlY29yYXRvciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ktZG9sbC1kZWNvcmF0b3JcIjtcclxuaW1wb3J0IHsgSUdvZ2dsZXMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWdvZ2dsZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHb2dnbGVzRG9sbERlY29yYXRvciBleHRlbmRzIERvbGxEZWNvcmF0b3Ige1xyXG4gICAgcHJpdmF0ZSBnb2dnbGVzUmVmOklHb2dnbGVzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRvbGxSZWY6SURvb2xEZWNvcmF0b3IsIGdvZ2dsZXNSZWY6SUdvZ2dsZXMpe1xyXG4gICAgICAgIHN1cGVyKGRvbGxSZWYpXHJcbiAgICAgICAgdGhpcy5nb2dnbGVzUmVmID0gZ29nZ2xlc1JlZjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWFySXRlbXNDb3N0KCk6bnVtYmVyIHtcclxuICAgICAgICBsZXQgb3RoZXJDb3N0Om51bWJlciA9IHRoaXMuZG9sbC5nZXRXZWFySXRlbXNDb3N0KCk7XHJcbiAgICAgICAgbGV0IGNvc3Q6bnVtYmVyID0gdGhpcy5nb2dnbGVzUmVmLmdldENvc3QoKTtcclxuICAgICAgICByZXR1cm4gb3RoZXJDb3N0ID09IDAgPyAgY29zdCA6IG90aGVyQ29zdCArIGNvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgd2hhdEFyZVlvdVdlYXJpbmcoKTpzdHJpbmcge1xyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5kb2xsLndoYXRBcmVZb3VXZWFyaW5nKCk7XHJcbiAgICAgICAgbGV0IHR5cGU6c3RyaW5nID0gdGhpcy5nb2dnbGVzUmVmLmdldFR5cGUoKTtcclxuICAgICAgICBsZXQgYnJhbmQ6c3RyaW5nID0gdGhpcy5nb2dnbGVzUmVmLmdldEJyYW5kKCk7XHJcbiAgICAgICAgaWYoaXRlbS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIGAke2l0ZW19ICwgJHticmFuZH0gJHt0eXBlfWBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGAke2JyYW5kfSAke3R5cGV9YDsgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRG9sbERlY29yYXRvciB9IGZyb20gXCIuLi9kb2xsL2RvbGwtZGVjb3JhdG9yXCI7XHJcbmltcG9ydCB7IElEb29sRGVjb3JhdG9yIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSS1kb2xsLWRlY29yYXRvclwiO1xyXG5pbXBvcnQgeyBJSGF0IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1oYXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIYXREb2xsRGVjb3JhdG9yIGV4dGVuZHMgRG9sbERlY29yYXRvciB7XHJcbiAgICBwcml2YXRlIGhhdDpJSGF0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRvbGxSZWY6SURvb2xEZWNvcmF0b3IsIGhhdDpJSGF0KXtcclxuICAgICAgICBzdXBlcihkb2xsUmVmKVxyXG4gICAgICAgIHRoaXMuaGF0ID0gaGF0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdlYXJJdGVtc0Nvc3QoKTpudW1iZXIge1xyXG4gICAgICAgIGxldCBvdGhlckNvc3Q6bnVtYmVyID0gdGhpcy5kb2xsLmdldFdlYXJJdGVtc0Nvc3QoKTtcclxuICAgICAgICBsZXQgY29zdDpudW1iZXIgPSB0aGlzLmhhdC5nZXRDb3N0KCk7XHJcbiAgICAgICAgcmV0dXJuIG90aGVyQ29zdCA9PSAwID8gY29zdCA6IG90aGVyQ29zdCArIGNvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgd2hhdEFyZVlvdVdlYXJpbmcoKTpzdHJpbmcge1xyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5kb2xsLndoYXRBcmVZb3VXZWFyaW5nKCk7XHJcbiAgICAgICAgbGV0IHR5cGU6c3RyaW5nID0gdGhpcy5oYXQuZ2V0VHlwZSgpO1xyXG4gICAgICAgIGlmKGl0ZW0ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtpdGVtfSwgJHt0eXBlfWBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHR5cGU7ICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCB7IERvbGxEZWNvcmF0b3IgfSBmcm9tIFwiLi4vZG9sbC9kb2xsLWRlY29yYXRvclwiO1xyXG5pbXBvcnQgeyBJRG9vbERlY29yYXRvciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ktZG9sbC1kZWNvcmF0b3JcIjtcclxuaW1wb3J0IHsgSVdyaXN0V2F0Y2ggfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLXdyaXN0LXdhdGNoXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV3Jpc3RXYXRjaERvbGxEZWNvcmF0b3IgZXh0ZW5kcyBEb2xsRGVjb3JhdG9yIHtcclxuICAgIHByaXZhdGUgd3Jpc3RXYXRjaDpJV3Jpc3RXYXRjaFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRvbGxSZWY6SURvb2xEZWNvcmF0b3IsIHdyaXN0V2F0Y2g6SVdyaXN0V2F0Y2gpe1xyXG4gICAgICAgIHN1cGVyKGRvbGxSZWYpXHJcbiAgICAgICAgdGhpcy53cmlzdFdhdGNoID0gd3Jpc3RXYXRjaDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWFySXRlbXNDb3N0KCk6bnVtYmVyIHtcclxuICAgICAgICBsZXQgb3RoZXJDb3N0Om51bWJlciA9IHRoaXMuZG9sbC5nZXRXZWFySXRlbXNDb3N0KCk7XHJcbiAgICAgICAgbGV0IGNvc3Q6bnVtYmVyID0gdGhpcy53cmlzdFdhdGNoLmdldENvc3QoKTtcclxuICAgICAgICByZXR1cm4gb3RoZXJDb3N0ID09IDAgPyBjb3N0IDogb3RoZXJDb3N0ICsgY29zdDtcclxuICAgIH1cclxuXHJcbiAgICB3aGF0QXJlWW91V2VhcmluZygpOnN0cmluZyB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmRvbGwud2hhdEFyZVlvdVdlYXJpbmcoKTtcclxuICAgICAgICBsZXQgdHlwZTpzdHJpbmcgPSB0aGlzLndyaXN0V2F0Y2guZ2V0VHlwZSgpO1xyXG4gICAgICAgIGxldCBicmFuZDpzdHJpbmcgPSB0aGlzLndyaXN0V2F0Y2guZ2V0QnJhbmQoKTtcclxuICAgICAgICBpZihpdGVtLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gYGl0ZW0sICR7YnJhbmR9ICR7dHlwZX1gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgJHticmFuZH0gJHt0eXBlfWA7ICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVhclJpbmcgfSBmcm9tIFwiLi9lYXItcmluZ3NcIjtcclxuaW1wb3J0IHsgR29nZ2xlIH0gZnJvbSBcIi4vZ29nZ2xlc1wiO1xyXG5pbXBvcnQgeyBIYXQgfSBmcm9tIFwiLi9oYXRcIjtcclxuaW1wb3J0IHsgV3Jpc3RXYXRjaCB9IGZyb20gXCIuL3dyaXN0LXdhdGNoXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUNDRVNTT1JZX05BTUUgPSB7XHJcbiAgICBFQVJfUklORzpcImVhci1yaW5nXCIsXHJcbiAgICBHT0dHTEVTOlwiZ29nZ2xlc1wiLFxyXG4gICAgSEFUOlwiaGF0XCIsXHJcbiAgICBXUklTVF9XQVRDSDpcIndyaXQgd2F0Y2hcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWNjZXNzb3JpZXNGYWN0b3J5IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKG5hbWU6c3RyaW5nKXtcclxuICAgICAgICBzd2l0Y2gobmFtZSl7XHJcbiAgICAgICAgICAgIGNhc2UgQUNDRVNTT1JZX05BTUUuRUFSX1JJTkc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVhclJpbmcoKTtcclxuICAgICAgICAgICAgY2FzZSBBQ0NFU1NPUllfTkFNRS5HT0dHTEVTOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHb2dnbGUoKTtcclxuICAgICAgICAgICAgY2FzZSBBQ0NFU1NPUllfTkFNRS5IQVQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEhhdCgpO1xyXG4gICAgICAgICAgICBjYXNlIEFDQ0VTU09SWV9OQU1FLldSSVNUX1dBVENIOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXcmlzdFdhdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUVhclJpbmcgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWVhci1yaW5nXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRWFyUmluZyBpbXBsZW1lbnRzIElFYXJSaW5ne1xyXG4gICAgcHJpdmF0ZSBjb3N0Om51bWJlciA9IDEwO1xyXG4gICAgcHJpdmF0ZSB0eXBlOnN0cmluZyA9IFwiYXJ0aWZpY2lhbCBlYXIgcmluZ1wiO1xyXG4gICAgcHJpdmF0ZSBzaGFwZTpzdHJpbmcgPSBcImNpcmNsZVwiO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKHR5cGU6c3RyaW5nLCBjb3N0Om51bWJlciwgc2hhcGU6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmNvc3QgPSBjb3N0O1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvc3QoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29zdFxyXG4gICAgfVxyXG5cclxuICAgIGdldFR5cGUoKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJR29nZ2xlcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ktZ29nZ2xlc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHb2dnbGUgaW1wbGVtZW50cyBJR29nZ2xlc3tcclxuICAgIHByaXZhdGUgY29zdDpudW1iZXIgPSA0MDAwO1xyXG4gICAgcHJpdmF0ZSB0eXBlOnN0cmluZyA9IFwiZ29nZ2xlc1wiO1xyXG4gICAgcHJpdmF0ZSBicmFuZDpzdHJpbmcgPSBcIlJheUJlblwiO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKHR5cGU6c3RyaW5nLCBjb3N0Om51bWJlciwgYnJhbmQ6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmNvc3QgPSBjb3N0O1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5icmFuZCA9IGJyYW5kO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvc3QoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29zdFxyXG4gICAgfVxyXG5cclxuICAgIGdldFR5cGUoKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnJhbmQoKTpzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnJhbmQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJSGF0IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1oYXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIYXQgaW1wbGVtZW50cyBJSGF0IHtcclxuICAgIHByaXZhdGUgY29zdDpudW1iZXIgPSAxMDA7XHJcbiAgICBwcml2YXRlIHR5cGU6c3RyaW5nID0gXCJoYXRcIjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKXsgfVxyXG5cclxuICAgIGluaXRpYWxpemUodHlwZTpzdHJpbmcsIGNvc3Q6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLmNvc3QgPSBjb3N0O1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29zdCgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3N0XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHlwZSgpOnN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElXcmlzdFdhdGNoIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS13cmlzdC13YXRjaFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBXcmlzdFdhdGNoIGltcGxlbWVudHMgSVdyaXN0V2F0Y2h7XHJcbiAgICBwcml2YXRlIGNvc3Q6bnVtYmVyID0gMzAwMDtcclxuICAgIHByaXZhdGUgdHlwZTpzdHJpbmcgPSBcIndyaXN0IHdhdGNoXCI7XHJcbiAgICBwcml2YXRlIGJyYW5kOnN0cmluZyA9IFwiVEFHXCI7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUodHlwZTpzdHJpbmcsIGNvc3Q6bnVtYmVyLCBicmFuZDpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuY29zdCA9IGNvc3Q7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmJyYW5kID0gYnJhbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29zdCgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3N0XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHlwZSgpOnN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCcmFuZCgpOnN0cmluZ3tcclxuICAgICAgICByZXR1cm4gdGhpcy5icmFuZDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElEb29sRGVjb3JhdG9yIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSS1kb2xsLWRlY29yYXRvclwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERvbGxEZWNvcmF0b3IgaW1wbGVtZW50cyBJRG9vbERlY29yYXRvciB7XHJcbiAgICBwcm90ZWN0ZWQgZG9sbDpJRG9vbERlY29yYXRvcjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoZG9sbFJlZjpJRG9vbERlY29yYXRvcil7XHJcbiAgICAgICAgdGhpcy5kb2xsID0gZG9sbFJlZjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWFySXRlbXNDb3N0KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kb2xsLmdldFdlYXJJdGVtc0Nvc3QoKTsgXHJcbiAgICB9XHJcblxyXG4gICAgd2hhdEFyZVlvdVdlYXJpbmcoKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRvbGwud2hhdEFyZVlvdVdlYXJpbmcoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElEb29sRGVjb3JhdG9yIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSS1kb2xsLWRlY29yYXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERvbGwgaW1wbGVtZW50cyBJRG9vbERlY29yYXRvciB7XHJcblxyXG4gICAgZ2V0V2Vhckl0ZW1zQ29zdCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgd2hhdEFyZVlvdVdlYXJpbmcoKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9sbEZhY3Rvcnkge1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKTpJRG9vbERlY29yYXRvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEb2xsKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJRG9vbERlY29yYXRvciB9IGZyb20gXCIuL2ludGVyZmFjZXMvSS1kb2xsLWRlY29yYXRvclwiO1xuaW1wb3J0IHsgRG9sbEZhY3RvcnkgfSBmcm9tIFwiLi9kb2xsL2RvbGxcIjtcbmltcG9ydCB7IElHb2dnbGVzIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9pLWdvZ2dsZXNcIjtcbmltcG9ydCB7IEFjY2Vzc29yaWVzRmFjdG9yeSwgQUNDRVNTT1JZX05BTUUgfSBmcm9tIFwiLi9hY2Nlc3Nvcmllcy9hY2Nlc3Nvcmllc0ZhY3RvcnlcIjtcbmltcG9ydCB7IERvbGxEZWNvcmF0b3JGYWN0b3J5LCBBQ0NFU1NPUllfREVDT1JBVE9SUyB9IGZyb20gXCIuL2FjY2Vzc29yaWVzLWRvbGwtZGFjb3JhdG9yL2RvbGwtZGVjb3JhdG9yLWZhY3RvcnlcIjtcbmltcG9ydCB7IElFYXJSaW5nIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9pLWVhci1yaW5nXCI7XG5cbmNsYXNzIEJvb3RzdHJhcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpeyAgfVxuXG4gICAgcHVibGljIGluaXRpYWxpemUoKXtcbiAgICAgICAgbGV0IGRvbGxPbmU6SURvb2xEZWNvcmF0b3IgPSBEb2xsRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgbGV0IHNjb3R0R29nZ2xlczpJR29nZ2xlcyA9IDxJR29nZ2xlcz4gQWNjZXNzb3JpZXNGYWN0b3J5LmNyZWF0ZShBQ0NFU1NPUllfTkFNRS5HT0dHTEVTKTtcbiAgICAgICAgZG9sbE9uZSA9IDxJRG9vbERlY29yYXRvcj5Eb2xsRGVjb3JhdG9yRmFjdG9yeVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZShBQ0NFU1NPUllfREVDT1JBVE9SUy5HT0dHTEVTLCBkb2xsT25lLCBzY290dEdvZ2dsZXMpXG4gICAgICAgIGNvbnNvbGUubG9nKGRvbGxPbmUud2hhdEFyZVlvdVdlYXJpbmcoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRvbGxPbmUuZ2V0V2Vhckl0ZW1zQ29zdCgpKTtcbiAgICAgICAgICAgIFxuICAgICAgICBsZXQgZ29sZEVhclJpbmc6SUVhclJpbmcgPSA8SUVhclJpbmc+IEFjY2Vzc29yaWVzRmFjdG9yeS5jcmVhdGUoQUNDRVNTT1JZX05BTUUuRUFSX1JJTkcpO1xuICAgICAgICBnb2xkRWFyUmluZy5pbml0aWFsaXplKFwiZ29sZCBlYXIgcmluZ1wiLCAxMDAwMCwgXCJjaXJjdWxhclwiKTtcblxuICAgICAgICBkb2xsT25lID0gPElEb29sRGVjb3JhdG9yPkRvbGxEZWNvcmF0b3JGYWN0b3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAuY3JlYXRlKEFDQ0VTU09SWV9ERUNPUkFUT1JTLkVBUl9SSU5HLCBkb2xsT25lLCBnb2xkRWFyUmluZylcblxuICAgICAgICBjb25zb2xlLmxvZyhkb2xsT25lLndoYXRBcmVZb3VXZWFyaW5nKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhkb2xsT25lLmdldFdlYXJJdGVtc0Nvc3QoKSk7XG5cbiAgICAgICAgbGV0IGRvbGxUd286SURvb2xEZWNvcmF0b3IgPSBEb2xsRmFjdG9yeS5jcmVhdGUoKTtcblxuICAgIH1cbn0gICBcblxubGV0IGJvb3QgPSBuZXcgQm9vdHN0cmFwKCk7XG5ib290LmluaXRpYWxpemUoKTsgICJdLCJzb3VyY2VSb290IjoiIn0=