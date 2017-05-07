webpackHotUpdate(0,{

/***/ 244:
/*!******************************!*\
  !*** ./js/pages/Articles.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactShareIcons = __webpack_require__(/*! react-share-icons */ 245);
	
	var _reactShareIcons2 = _interopRequireDefault(_reactShareIcons);
	
	var _Instagram = __webpack_require__(/*! react-share-icons/lib/Instagram */ 250);
	
	var _Instagram2 = _interopRequireDefault(_Instagram);
	
	var _ArticlesStore = __webpack_require__(/*! ../stores/ArticlesStore */ 258);
	
	var _ArticlesStore2 = _interopRequireDefault(_ArticlesStore);
	
	var _ArticlesActions = __webpack_require__(/*! ../actions/ArticlesActions */ 264);
	
	var _SourcesActions = __webpack_require__(/*! ../actions/SourcesActions */ 273);
	
	var _SortActions = __webpack_require__(/*! ../actions/SortActions */ 274);
	
	var _SortStore = __webpack_require__(/*! ../stores/SortStore */ 275);
	
	var _SortStore2 = _interopRequireDefault(_SortStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import PropTypes from 'prop-types';
	
	
	var Articles = function (_React$Component) {
	  _inherits(Articles, _React$Component);
	
	  function Articles() {
	    _classCallCheck(this, Articles);
	
	    var _this = _possibleConstructorReturn(this, (Articles.__proto__ || Object.getPrototypeOf(Articles)).call(this));
	
	    _this.state = {
	      articles: _ArticlesStore2.default.getAll(),
	      sortType: ''
	    };
	
	    _this.getArticles = _this.getArticles.bind(_this);
	    return _this;
	  }
	
	  _createClass(Articles, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (!this.props.params) return;
	      (0, _ArticlesActions.getArticles)(this.props.params.article, 'top');
	      _ArticlesStore2.default.addChangeListener(this.getArticles);
	    }
	  }, {
	    key: 'componentWillUnMount',
	    value: function componentWillUnMount() {
	      SourceStore.removeChangeListener(this.getArticles);
	    }
	  }, {
	    key: 'getArticles',
	    value: function getArticles() {
	      this.setState({
	        articles: _ArticlesStore2.default.getAll()
	      });
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      console.log('events', event.target.value);
	      console.log();
	      this.setState((0, _ArticlesActions.getArticles)(this.props.params.article, event.target.value));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      //console.log("params of article", this.props.location.query)
	      var sorts = this.props && this.props.location && this.props.location.query.sort;
	      //let sorts = this.props.location.query.sort
	      sorts = sorts && sorts.split(',');
	      console.log('sorts', sorts);
	      var articles = this.state.articles;
	      //console.log(this.state);
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { 'classborder-top-10': true },
	          _react2.default.createElement(
	            'h5',
	            null,
	            'Sort by:'
	          ),
	          _react2.default.createElement(
	            'select',
	            { className: 'form-control', id: 'select', onChange: this.handleChange.bind(this) },
	            sorts && sorts.map(function (type, index) {
	              return _react2.default.createElement(
	                'option',
	                { value: type },
	                type
	              );
	            })
	          )
	        ),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'div',
	          { className: 'card-columns border-top-10' },
	          articles && articles.map(function (article, index) {
	            //console.log(article);
	            return _react2.default.createElement(
	              'div',
	              { className: 'card-deck' },
	              _react2.default.createElement(
	                'div',
	                { className: 'row' },
	                _react2.default.createElement('img', { className: 'card-img-top img-responsive col-md-4', src: article.urlToImage, alt: article.title }),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'card-block col-md-8' },
	                  _react2.default.createElement(
	                    'h4',
	                    { className: 'card-title' },
	                    article.title
	                  ),
	                  _react2.default.createElement(
	                    'p',
	                    { className: 'card-text' },
	                    article.description
	                  ),
	                  _react2.default.createElement(
	                    'a',
	                    { href: article.url, target: '_blank', className: 'btn btn-danger' },
	                    'More ...'
	                  )
	                )
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return Articles;
	}(_react2.default.Component);
	
	exports.default = Articles;
	;

/***/ })

})
//# sourceMappingURL=0.094d6ddf45e81c79fad9.hot-update.js.map