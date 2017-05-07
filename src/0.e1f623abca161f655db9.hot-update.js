webpackHotUpdate(0,{

/***/ 329:
/*!*************************************!*\
  !*** ./js/components/layout/Nav.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(/*! prop-types */ 277);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 182);
	
	var _jsCookie = __webpack_require__(/*! js-cookie */ 281);
	
	var _jsCookie2 = _interopRequireDefault(_jsCookie);
	
	var _createBrowserHistory = __webpack_require__(/*! history/createBrowserHistory */ 330);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	var _AuthenticationAction = __webpack_require__(/*! ../../actions/AuthenticationAction */ 338);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var history = (0, _createBrowserHistory2.default)({
	  forceRefresh: true
	});
	
	var Nav = function (_React$Component) {
	  _inherits(Nav, _React$Component);
	
	  function Nav() {
	    _classCallCheck(this, Nav);
	
	    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this));
	
	    _this.state = {
	      collapsed: true,
	      user: _jsCookie2.default.get('debprojdb')
	    };
	    _this.logout = _this.logout.bind(_this);
	    return _this;
	  }
	
	  _createClass(Nav, [{
	    key: "toggleCollapse",
	    value: function toggleCollapse() {
	      var collapsed = !this.state.collapsed;
	      this.setState({ collapsed: collapsed });
	    }
	    // componentWillMount(){
	    // if(this.state.user === undefined){
	    //   history.push('/login')
	    // }
	    // }
	
	  }, {
	    key: "logout",
	    value: function logout() {
	      (0, _AuthenticationAction.logout)();
	      _reactRouter.browserHistory.push('/login');
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var location = this.props.location;
	      var _state = this.state,
	          collapsed = _state.collapsed,
	          user = _state.user;
	
	      var welcomeClass = location && location.pathname === "/" ? "active" : "";
	      var loginClass = location && location.pathname && location.pathname.match(/^\/login/) ? "active" : "";
	      var articlesClass = location && location.pathname && location.pathname.match(/^\/articles/) ? "active" : "";
	
	      var navClass = collapsed ? "collapse" : "";
	
	      return _react2.default.createElement(
	        "ul",
	        { className: "nav justify-content-end" },
	        _react2.default.createElement(
	          "li",
	          { className: "nav-item" },
	          _react2.default.createElement(
	            "a",
	            { className: "nav-link active", href: "#" },
	            "Active"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          { className: "nav-item" },
	          _react2.default.createElement(
	            "a",
	            { className: "nav-link", href: "#" },
	            "Link"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          { className: "nav-item" },
	          _react2.default.createElement(
	            "a",
	            { className: "nav-link", href: "#" },
	            "Link"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          { className: "nav-item" },
	          _react2.default.createElement(
	            "a",
	            { className: "nav-link disabled", href: "#" },
	            "Disabled"
	          )
	        )
	      );
	    }
	  }]);
	
	  return Nav;
	}(_react2.default.Component);
	
	exports.default = Nav;

/***/ })

})
//# sourceMappingURL=0.e1f623abca161f655db9.hot-update.js.map