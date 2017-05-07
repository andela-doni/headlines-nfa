webpackHotUpdate(0,{

/***/ 280:
/*!****************************!*\
  !*** ./js/pages/Layout.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 182);
	
	var _jsCookie = __webpack_require__(/*! js-cookie */ 281);
	
	var _jsCookie2 = _interopRequireDefault(_jsCookie);
	
	var _Footer = __webpack_require__(/*! ../components/layout/Footer */ 282);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _Nav = __webpack_require__(/*! ../components/layout/Nav */ 329);
	
	var _Nav2 = _interopRequireDefault(_Nav);
	
	var _createBrowserHistory = __webpack_require__(/*! history/createBrowserHistory */ 330);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	var _AuthenticationStore = __webpack_require__(/*! ../stores/AuthenticationStore */ 339);
	
	var _AuthenticationStore2 = _interopRequireDefault(_AuthenticationStore);
	
	var _AuthenticationAction = __webpack_require__(/*! ../actions/AuthenticationAction */ 338);
	
	var _Login = __webpack_require__(/*! ./Login */ 340);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var isLoggedIn = _jsCookie2.default.get('debprojdb');
	var history = (0, _createBrowserHistory2.default)({
	  forceRefresh: true
	});
	
	var Layout = function (_React$Component) {
	  _inherits(Layout, _React$Component);
	
	  function Layout(props) {
	    _classCallCheck(this, Layout);
	
	    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
	
	    _this.login = _this.login.bind(_this);
	    _this.state = _this.userState();
	
	    return _this;
	  }
	
	  _createClass(Layout, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      _AuthenticationStore2.default.addChangeListener(this.login);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      _AuthenticationStore2.default.removeChangeListener(this.login);
	    }
	  }, {
	    key: "login",
	    value: function login() {
	      this.setState(this.userState());
	    }
	  }, {
	    key: "userState",
	    value: function userState() {
	      return {
	        user: _AuthenticationStore2.default.getUser()
	      };
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var location = this.props.location;
	
	      var containerStyle = {
	        marginTop: "60px"
	      }; //console.log(this.state.user);
	
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_Nav2.default, { location: location, isLoggedIn: this.state.user.isAuthenticated }),
	        _react2.default.createElement(
	          "div",
	          { className: "container", style: containerStyle },
	          _react2.default.createElement(
	            "div",
	            { className: "row" },
	            _react2.default.createElement(
	              "div",
	              { className: "col-lg-12" },
	              this.props.children
	            )
	          ),
	          _react2.default.createElement(_Footer2.default, null)
	        )
	      );
	    }
	  }]);
	
	  return Layout;
	}(_react2.default.Component);
	
	exports.default = Layout;

/***/ })

})
//# sourceMappingURL=0.65a68f8951ef28951170.hot-update.js.map