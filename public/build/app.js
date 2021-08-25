(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_bulma_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/bulma.css */ "./assets/styles/bulma.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)

 // start the Stimulus application



window.onload = function () {
  var Randomize = /*#__PURE__*/function () {
    function Randomize() {//this.init()
      //this.onClick()

      _classCallCheck(this, Randomize);
    }

    _createClass(Randomize, [{
      key: "init",
      value: function init() {
        console.log('OK !');
        var images = [{
          id: 0,
          url: './images/grimace1.png'
        }, {
          id: 1,
          url: './images/grimace2.png'
        }, {
          id: 2,
          url: './images/grimace3.png'
        }, {
          id: 3,
          url: './images/grimace4.png'
        }];
        var infos = {
          id: 1,
          texte: 'coucou les moches'
        };
        var titres = {
          id: 1,
          texte: 'coucou les beaux'
        };
        this.randomizeImage(images);
        document.getElementById('deux').innerHTML = '<p>' + infos.texte + '</p>';
        document.getElementById('trois').innerHTML = '<p>' + titres.texte + '</p>';
      }
    }, {
      key: "onClick",
      value: function onClick() {
        var clickEvent = document.getElementById('initParagraphe');
        clickEvent.onClick = this.actualiseConteneur;
      }
      /* on peut pas aller à la ligne dans les box */

    }, {
      key: "actualiseConteneur",
      value: function actualiseConteneur() {
        var texteun = document.getElementById('textun').value;
        document.getElementById('deux').innerHTML = '<p>' + texteun + '</p>';
        var textedeux = document.getElementById('textdeux').value;
        document.getElementById('trois').innerHTML = '<p>' + textedeux + '</p>';
      }
    }, {
      key: "randomizeImage",
      value: function randomizeImage(images) {
        var randomValue = Math.floor(Math.random() * Math.floor(images.length));
        document.getElementById('un').innerHTML = '<img src="' + images[randomValue].url + '"/>';
      }
    }]);

    return Randomize;
  }();

  var randomize = new Randomize();

  var MusicPlayer = /*#__PURE__*/function () {
    function MusicPlayer() {
      _classCallCheck(this, MusicPlayer);

      this.init();
    }

    _createClass(MusicPlayer, [{
      key: "init",
      value: function init() {
        console.log('lowkey kinda hot 🥵');
      }
    }]);

    return MusicPlayer;
  }();

  var musicPlay = new MusicPlayer(); //Form JS

  var context = document.getElementById('selectContext');
  console.log(context);

  if (context !== null) {
    context.addEventListener("change", changeContext);
    hideAllForms();
  }

  function changeContext() {
    var context = document.getElementById('selectContext');
    hideAllForms();

    switch (context.value) {
      case 'artiste':
        console.log('artiste');
        document.getElementById('form-artiste').style.display = "block";
        break;

      case 'album':
        console.log('album');
        document.getElementById('form-album').style.display = "block";
        break;

      case 'titre':
        console.log('titre');
        document.getElementById('form-titre').style.display = "block";
        break;
    }
  }

  function hideAllForms() {
    document.getElementById('form-titre').style.display = "none";
    document.getElementById('form-album').style.display = "none";
    document.getElementById('form-artiste').style.display = "none";
  }
};

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/bulma.css":
/*!*********************************!*\
  !*** ./assets/styles/bulma.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ob-7db861"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/M2ZiYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2J1bG1hLmNzcz9jMzJmIl0sIm5hbWVzIjpbImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIkNvbnRyb2xsZXIiLCJ3aW5kb3ciLCJvbmxvYWQiLCJSYW5kb21pemUiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VzIiwiaWQiLCJ1cmwiLCJpbmZvcyIsInRleHRlIiwidGl0cmVzIiwicmFuZG9taXplSW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiY2xpY2tFdmVudCIsIm9uQ2xpY2siLCJhY3R1YWxpc2VDb250ZW5ldXIiLCJ0ZXh0ZXVuIiwidmFsdWUiLCJ0ZXh0ZWRldXgiLCJyYW5kb21WYWx1ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInJhbmRvbWl6ZSIsIk11c2ljUGxheWVyIiwiaW5pdCIsIm11c2ljUGxheSIsImNvbnRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hhbmdlQ29udGV4dCIsImhpZGVBbGxGb3JtcyIsInN0eWxlIiwiZGlzcGxheSIsImFwcCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBJOzs7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RUFBc0NxQixLQUF0QyxDQUE0Q0MsT0FBNUMsR0FBc0QsT0FBdEQ7QUFDQTtBQVpSO0FBY0g7O0FBRUQsV0FBU0YsWUFBVCxHQUF1QjtBQUNuQnJCLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ3FCLEtBQXRDLENBQTRDQyxPQUE1QyxHQUFzRCxNQUF0RDtBQUNBdkIsWUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDcUIsS0FBdEMsQ0FBNENDLE9BQTVDLEdBQXNELE1BQXREO0FBQ0F2QixZQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0NxQixLQUF4QyxDQUE4Q0MsT0FBOUMsR0FBd0QsTUFBeEQ7QUFDSDtBQUNKLENBN0ZELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NqQkE7O0FBQ08sSUFBTUMsR0FBRyxHQUFHQywwRUFBZ0IsQ0FBQ0MsMElBQUQsQ0FBNUIsQyxDQU1QO0FBQ0EsZ0U7Ozs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqfHQpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuXG5pbXBvcnQgJy4vc3R5bGVzL2J1bG1hLmNzcyc7IFxuXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5cblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY2xhc3MgUmFuZG9taXplIHtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAgICAgLy90aGlzLmluaXQoKVxuICAgICAgICAgICAgLy90aGlzLm9uQ2xpY2soKVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGluaXQoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPSyAhJyk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZXMgPSBbXG4gICAgICAgICAgICAgICAge2lkOiAwLCB1cmw6ICcuL2ltYWdlcy9ncmltYWNlMS5wbmcnfSxcbiAgICAgICAgICAgICAgICB7aWQ6IDEsIHVybDogJy4vaW1hZ2VzL2dyaW1hY2UyLnBuZyd9LFxuICAgICAgICAgICAgICAgIHtpZDogMiwgdXJsOiAnLi9pbWFnZXMvZ3JpbWFjZTMucG5nJ30sXG4gICAgICAgICAgICAgICAge2lkOiAzLCB1cmw6ICcuL2ltYWdlcy9ncmltYWNlNC5wbmcnfVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGNvbnN0IGluZm9zID0ge2lkOjEsIHRleHRlOiAnY291Y291IGxlcyBtb2NoZXMnfTtcbiAgICAgICAgICAgIGNvbnN0IHRpdHJlcyA9IHtpZDoxLCB0ZXh0ZTogJ2NvdWNvdSBsZXMgYmVhdXgnfTtcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplSW1hZ2UoaW1hZ2VzKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXV4JykuaW5uZXJIVE1MID0gJzxwPicgKyBpbmZvcy50ZXh0ZSArICc8L3A+JztcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cm9pcycpLmlubmVySFRNTCA9ICc8cD4nICsgdGl0cmVzLnRleHRlICsgJzwvcD4nO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIG9uQ2xpY2soKXtcbiAgICAgICAgICAgIGxldCBjbGlja0V2ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luaXRQYXJhZ3JhcGhlJyk7XG4gICAgICAgICAgICBjbGlja0V2ZW50Lm9uQ2xpY2sgPSB0aGlzLmFjdHVhbGlzZUNvbnRlbmV1cjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvKiBvbiBwZXV0IHBhcyBhbGxlciDDoCBsYSBsaWduZSBkYW5zIGxlcyBib3ggKi9cbiAgICAgICAgYWN0dWFsaXNlQ29udGVuZXVyKCl7XG4gICAgICAgICAgICBsZXQgdGV4dGV1biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0dW4nKS52YWx1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXV4JykuaW5uZXJIVE1MID0gJzxwPicgKyB0ZXh0ZXVuICsgJzwvcD4nO1xuICAgIFxuICAgICAgICAgICAgbGV0IHRleHRlZGV1eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0ZGV1eCcpLnZhbHVlO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Ryb2lzJykuaW5uZXJIVE1MID0gJzxwPicgKyB0ZXh0ZWRldXggKyAnPC9wPic7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmFuZG9taXplSW1hZ2UoaW1hZ2VzKXtcbiAgICAgICAgICAgIGxldCByYW5kb21WYWx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoaW1hZ2VzLmxlbmd0aCkpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuJykuaW5uZXJIVE1MID0gJzxpbWcgc3JjPVwiJyArIGltYWdlc1tyYW5kb21WYWx1ZV0udXJsICsgJ1wiLz4nO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJhbmRvbWl6ZSA9IG5ldyBSYW5kb21pemUoKTtcblxuICAgIGNsYXNzIE11c2ljUGxheWVyIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXQoKVxuICAgICAgICB9XG5cbiAgICAgICAgaW5pdCgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvd2tleSBraW5kYSBob3Qg8J+ltScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbXVzaWNQbGF5ID0gbmV3IE11c2ljUGxheWVyKCk7XG4gICAgXG5cbiAgICAvL0Zvcm0gSlNcbiAgICBcbiAgICB2YXIgY29udGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RDb250ZXh0Jyk7XG5cbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcblxuICAgIGlmKGNvbnRleHQgIT09IG51bGwpe1xuICAgICAgICBjb250ZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2hhbmdlQ29udGV4dCk7XG4gICAgICAgIGhpZGVBbGxGb3JtcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZUNvbnRleHQoKXtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0Q29udGV4dCcpO1xuICAgICAgICBoaWRlQWxsRm9ybXMoKTtcbiAgICAgICAgc3dpdGNoIChjb250ZXh0LnZhbHVlKXtcbiAgICAgICAgICAgIGNhc2UgJ2FydGlzdGUnIDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXJ0aXN0ZScpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWFydGlzdGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWxidW0nIDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWxidW0nKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1hbGJ1bScpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0aXRyZScgOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aXRyZScpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXRpdHJlJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICBicmVhazsgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVBbGxGb3Jtcygpe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS10aXRyZScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tYWxidW0nKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWFydGlzdGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufTtcblxuXG5cbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=