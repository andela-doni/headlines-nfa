import PropTypes from 'prop-types';
import React from 'react';
import ArticlesStore from '../../stores/ArticlesStore';
import { getArticles } from '../../actions/ArticlesActions';
import SourceStore from '../../stores/SourceStore';


export default class Articles extends React.Component {
   /**
   * constructor for Articles class
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      articles: ArticlesStore.getAll(),
      sortType: ''
    };
    this.getArticles = this.getArticles.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  /**
   * Adds event listener
   * Mounts the api after the articles have been mounted
   * @returns {null} returns null
   * @method componentDidMount
   */
  componentDidMount() {
    if (!this.props.params) return;
    if (this.mounted === true) return;
    getArticles(this.props.params.article, 'top');
    ArticlesStore.addChangeListener(this.getArticles);
  }
   /**
   * unmounts the articles Component
   * Removes event listener
   * @method componentWillUnMount
   */

  componentWillUnMount() {
    SourceStore.removeChangeListener(this.getArticles);
  }
   /**
   * fetches articles from store
   * @returns {null} returns nothing
   * @method getArticles
   */
  getArticles() {
    this.setState({
      articles: ArticlesStore.getAll()
    });
  }
  /**
   * @param {event} event parameter
   * @returns {null} returns nothing
   */
  handleChange(event) {
    this.setState(
      getArticles(
        this.props.params.article, event.target.value)
      );
  }
    /**
   * @method
   * @param {null} render function
   * @returns {null} returns nothing
   * renders the Component
   */
  render() {
    let sorts = this.props
      && this.props.location
      && this.props.location.query.sort;
    sorts = sorts && sorts.split(',');
    const articles = this.state.articles;
    const props = this.props && this.props.params && this.props.params.article;
    const i = 0;
    return (
       <div >
        <div >
          <br/>
          <h3 className="first-letter main-header">{props}</h3>
          <select id="select pull-left"
          onChange = "this.handleChange">
            <option>Sort By</option>
            {sorts && sorts.map(type =>
            <option value={type} key={type}>{type}</option>)}
          </select>

        </div>
        <br/><br/>

        <div className="card-columns border-top-10">
          {articles && articles.map(article => (
            <div className ="card-deck" key={i + 1}>
            <div className= "row">
              <img className="card-img-top img-responsive col-md-4"
                src={article.urlToImage} alt={article.title} />
              <div className="card-block col-md-8 border-raduis">
              <h4 className="card-title main-header">{article.title}</h4>
              <p className="card-text">{article.description}</p>
              <a href={article.url} target="_blank"
                className="btn btn-success">More ...
              </a>
              </div>
           </div>
           </div>
            ))}
        </div>
      </div>
    );
  }
}

Articles.propTypes = {
  params: PropTypes.element.isRequired,
  location: PropTypes.element.isRequired
};
