(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@fluentui/react"), require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@fluentui/react", "prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["PropertySheet"] = factory(require("@fluentui/react"), require("prop-types"), require("react"));
	else
		root["PropertySheet"] = factory(root["FluentUIReact"], root["PropTypes"], root["React"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__13__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__11__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PropertySheet)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _PropertySheetLabelAlignments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var PropertySheet = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(PropertySheet, _React$Component);

  var _super = _createSuper(PropertySheet);

  function PropertySheet(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PropertySheet);

    _this = _super.call(this, props);
    _this._defaultLabelRenderer = _this._defaultLabelRenderer.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this._defaultValueRenderer = _this._defaultValueRenderer.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PropertySheet, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: this._computeContainerClassName()
      }, this._renderItems());
    }
  }, {
    key: "_getLabelAlignment",
    value: function _getLabelAlignment() {
      return this.props.labelAlignment || _PropertySheetLabelAlignments__WEBPACK_IMPORTED_MODULE_9__["default"].right;
    }
  }, {
    key: "_computeContainerClassName",
    value: function _computeContainerClassName() {
      var containerClassName = ['ms-Grid', 'lvd-propertysheet-key-value-listing-container'];

      if (this._isLabelOnly()) {
        containerClassName.push('lvd-propertysheet-key-value-listing-container-label-only');
      } else {
        containerClassName.push('lvd-propertysheet-key-value-listing-container-with-label');
      }

      var className = this._getClassName();

      if (!!className) {
        containerClassName.push(className);
      }

      return containerClassName.join(' ');
    }
  }, {
    key: "_isLabelOnly",
    value: function _isLabelOnly() {
      return !!this.props.labelOnly;
    }
  }, {
    key: "_getClassName",
    value: function _getClassName() {
      return this.props.className || null;
    }
  }, {
    key: "_renderItems",
    value: function _renderItems() {
      var _this2 = this;

      var itemIndex = 0;

      var items = this._getItems();

      return items.map(function (item) {
        return _this2._renderItem(item, itemIndex++);
      });
    }
  }, {
    key: "_getItems",
    value: function _getItems() {
      return this.props.items || [];
    }
  }, {
    key: "_computeItemKey",
    value: function _computeItemKey(itemIndex) {
      return "lvd-propertysheet-item-".concat(itemIndex);
    }
  }, {
    key: "_renderItem",
    value: function _renderItem(item, itemIndex) {
      var labelOnly = this._isLabelOnly();

      var itemKey = this._computeItemKey(itemIndex);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        key: itemKey,
        className: this._computeItemContainerClassName(itemIndex)
      }, this._renderItemLabel(item, itemIndex), !labelOnly && this._renderItemValue(item, itemIndex));
    }
  }, {
    key: "_computeItemContainerClassName",
    value: function _computeItemContainerClassName(itemIndex) {
      var itemContainerClassName = ['ms-Grid-row', 'lvd-propertysheet-key-value-item-container'];

      if (itemIndex % 2 == 0) {
        itemContainerClassName.push('ms-bgColor-neutralQuaternaryAlt');
      }

      return itemContainerClassName.join(' ');
    }
  }, {
    key: "_renderItemLabel",
    value: function _renderItemLabel(item, itemIndex) {
      var renderer = this._getItemLabelRenderer();

      var labelAlignment = this._getLabelAlignment();

      var labelAlignmentClassName = this._computeLabelAlignmentCssClassName(labelAlignment);

      var labelClassName = "ms-Grid-col ms-sm6 ms-md4 lvd-propertysheet-key-value-item-key ".concat(labelAlignmentClassName);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: labelClassName
      }, renderer(item, itemIndex));
    }
  }, {
    key: "_getItemLabelRenderer",
    value: function _getItemLabelRenderer() {
      return this.props.onRenderLabel || this._defaultLabelRenderer;
    }
  }, {
    key: "_defaultLabelRenderer",
    value: function _defaultLabelRenderer(item, itemIndex) {
      return item.Label;
    }
  }, {
    key: "_computeLabelAlignmentCssClassName",
    value: function _computeLabelAlignmentCssClassName(labelAlignment) {
      switch (labelAlignment) {
        case _PropertySheetLabelAlignments__WEBPACK_IMPORTED_MODULE_9__["default"].left:
          return 'lvd-propertysheet-align-left';

        case _PropertySheetLabelAlignments__WEBPACK_IMPORTED_MODULE_9__["default"].center:
          return 'lvd-propertysheet-align-center';

        default:
          return 'lvd-propertysheet-align-right';
      }
    }
  }, {
    key: "_renderItemValue",
    value: function _renderItemValue(item, itemIndex) {
      var renderer = this._getItemValueRenderer();

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "ms-Grid-col ms-sm6 ms-md8 lvd-propertysheet-key-value-item-value"
      }, renderer(item, itemIndex));
    }
  }, {
    key: "_getItemValueRenderer",
    value: function _getItemValueRenderer() {
      return this.props.onRenderValue || this._defaultValueRenderer;
    }
  }, {
    key: "_defaultValueRenderer",
    value: function _defaultValueRenderer(item, itemIndex) {
      var renderedValue = null;

      if (this._hasUrl(item)) {
        renderedValue = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.Link, {
          key: "lvd-propertysheet-item-value",
          href: item.Url,
          underline: this._shouldUnderlineValueLinks()
        }, item.Value);
      } else {
        renderedValue = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("span", {
          key: "lvd-propertysheet-item-value"
        }, item.Value);
      }

      var renderedValueAction = null;

      if (this._hasAction(item)) {
        renderedValueAction = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.IconButton, {
          key: "lvd-propertysheet-item-value-action",
          iconProps: {
            iconName: item.Action.Icon
          },
          onClick: this._handleItemValueActionClicked.bind(this, item, itemIndex)
        });
      }

      var output = [renderedValue];

      if (renderedValueAction != null) {
        output.push(renderedValueAction);
      }

      return this._shouldFormatValuesAsCode(item) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("pre", null, output) : output;
    }
  }, {
    key: "_hasUrl",
    value: function _hasUrl(item) {
      return item.hasOwnProperty('Url') && !!item.Url;
    }
  }, {
    key: "_shouldUnderlineValueLinks",
    value: function _shouldUnderlineValueLinks() {
      return !!this.props.underlineValueLinks;
    }
  }, {
    key: "_hasAction",
    value: function _hasAction(item) {
      return item.hasOwnProperty('Action') && !!item.Action && !!item.Action.Code && !!item.Action.Icon;
    }
  }, {
    key: "_handleItemValueActionClicked",
    value: function _handleItemValueActionClicked(item, itemIndex, event) {
      if (this.props.onValueItemActionInvoked != null) {
        this.props.onValueItemActionInvoked(item, itemIndex, event);
      }
    }
  }, {
    key: "_shouldFormatValuesAsCode",
    value: function _shouldFormatValuesAsCode(item) {
      return item.hasOwnProperty('FormatAsCode') && !!item.FormatAsCode;
    }
  }, {
    key: "_renderClear",
    value: function _renderClear() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "lvd-propertysheet-clear"
      });
    }
  }]);

  return PropertySheet;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));


PropertySheet.propTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  items: prop_types__WEBPACK_IMPORTED_MODULE_7___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)).isRequired,
  labelOnly: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  labelAlignment: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  underlineValueLinks: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  onRenderLabel: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onRenderValue: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onValueItemActionInvoked: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
};

/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),
/* 7 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),
/* 8 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),
/* 9 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),
/* 10 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var PropertySheetLabelAlignments = {
  left: 'left',
  right: 'right',
  center: 'center'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PropertySheetLabelAlignments);

/***/ })
/******/ 	]);
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertySheetLabelAlignments": () => (/* reexport safe */ _PropertySheetLabelAlignments_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "PropertySheet": () => (/* reexport safe */ _PropertySheet_jsx__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _PropertySheet_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _PropertySheetLabelAlignments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});