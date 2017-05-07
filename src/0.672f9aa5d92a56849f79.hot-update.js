webpackHotUpdate(0,{

/***/ 276:
/*!*****************************!*\
  !*** ./js/pages/Welcome.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(/*! prop-types */ 277);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _SourceStore = __webpack_require__(/*! ../stores/SourceStore */ 279);
	
	var _SourceStore2 = _interopRequireDefault(_SourceStore);
	
	var _SourcesActions = __webpack_require__(/*! ../actions/SourcesActions */ 273);
	
	var _Articles = __webpack_require__(/*! ./Articles */ 244);
	
	var _Articles2 = _interopRequireDefault(_Articles);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 182);
	
	var _ArticlesActions = __webpack_require__(/*! ../actions/ArticlesActions */ 264);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Welcome = function (_React$Component) {
	  _inherits(Welcome, _React$Component);
	
	  function Welcome() {
	    _classCallCheck(this, Welcome);
	
	    var _this = _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).call(this));
	
	    _this.state = {
	      sources: _SourceStore2.default.getAll(),
	      search: ''
	    };
	    _this.getSources = _this.getSources.bind(_this);
	    return _this;
	  }
	
	  _createClass(Welcome, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      // SourceStore.on(this.getSources);
	
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      (0, _SourcesActions.getSources)();
	      _SourceStore2.default.addChangeListener(this.getSources);
	    }
	  }, {
	    key: 'componentWillUnMount',
	    value: function componentWillUnMount() {
	      _SourceStore2.default.removeChangeListener(this.getSources);
	    }
	  }, {
	    key: 'getSources',
	    value: function getSources() {
	      this.setState({
	        sources: _SourceStore2.default.getAll()
	      });
	      //console.log(SourceStore.getAll());
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      //const searchedSources = e.target.value;
	      //this.changeSources(this.state.sources);
	      //console.log(event);
	      this.setState({ search: event.target.value });
	      //console.log(this.state.search, "search");
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this,
	          _React$createElement;
	
	      var sources = this.state.sources;
	
	      console.log(this.state, "sources");
	
	      var filteredSources = this.state.sources.filter(function (source) {
	        return source.name.toLowerCase().indexOf(_this2.state.search.toLowerCase()) !== -1;
	      });
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('br', null),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'h3',
	          null,
	          'News from over 70 sources'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement('input', (_React$createElement = { className: 'searchbox col col-lg-12', type: 'text' }, _defineProperty(_React$createElement, 'className', 'form-control'), _defineProperty(_React$createElement, 'value', this.state.search), _defineProperty(_React$createElement, 'onChange', this.handleChange.bind(this)), _React$createElement))
	        ),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement('div', null),
	        _react2.default.createElement(
	          'div',
	          { className: 'card-columns ' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            filteredSources.map(function (source) {
	              return _react2.default.createElement(
	                'div',
	                { className: 'panel panel-success col-md-6', key: source.id },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'panel-heading' },
	                  _react2.default.createElement('img', { className: 'card-img-top img-responsive col-md-4', src: source.urlToLogos.small }),
	                  _react2.default.createElement(
	                    'p',
	                    { className: 'text-info panel-title' },
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: '/sources/' + source.id + '?sort=' + source.sortBysAvailable },
	                      source.name
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'panel-body ' },
	                  _react2.default.createElement(
	                    'p',
	                    { className: 'text-info' },
	                    ' ',
	                    source.description,
	                    ' '
	                  ),
	                  _react2.default.createElement(
	                    'a',
	                    { type: 'button', className: 'btn-floating btn-small btn-fb' },
	                    _react2.default.createElement('i', { className: 'fa fa-facebook' })
	                  )
	                )
	              );
	            })
	          )
	        )
	      );
	    }
	  }]);
	
	  return Welcome;
	}(_react2.default.Component);
	
	exports.default = Welcome;
	;

/***/ })

})
//# sourceMappingURL=0.672f9aa5d92a56849f79.hot-update.js.map