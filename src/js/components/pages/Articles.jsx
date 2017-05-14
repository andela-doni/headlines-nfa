import React from 'react';
import PropTypes from 'prop-types';
import Icon  from 'react-share-icons';
import ArticlesStore from '../../stores/ArticlesStore';
import { getArticles } from '../../actions/ArticlesActions';
import { getSources } from '../../actions/SourcesActions';
import { getSorts } from '../../actions/SortActions';
import SortStore from '../../stores/SortStore';

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
  }
  //Mounts the api after the articles have been mounted
  /**
   * Adds event listener
   * Mounts the api after the articles have been mounted
   * @method componentDidMount
   */
  componentDidMount() {
    if (!this.props.params) return;
    if(this.mounted == true) return;
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
   * @method getArticles
   */
  getArticles() {
    this.setState({
      articles: ArticlesStore.getAll()
    });
  }
  /**
   * @method handleChange
   * handles changes when an event occurs
   */
  handleChange(event) {
    this.setState(
      getArticles(
        this.props.params.article, event.target.value)
      );
  }
    /**
   * @method
   * renders the Component
   */
  render() {
    let sorts = this.props 
      && this.props.location 
      && this.props.location.query.sort
    sorts = sorts && sorts.split(',');
    const articles = this.state.articles;
    let props = this.props 
      && this.props.params 
      && this.props.params.article
    let i=0;
    return (
       <div >
        <div >
          <br/>
          <h3 className="first-letter main-header">{props}</h3>
          <select id="select pull-left" 
              onChange={this.handleChange.bind(this)}>
            <option>Sort By</option>
            {sorts && sorts.map(function (type, index) {
              return <option value={type} key={type}>{type}</option>;
            })}
          </select>

        </div>
        <br/><br/>

        <div className="card-columns border-top-10">
          {articles && articles.map((article, index) => {
            return (
            <div className ="card-deck" key={i++}>
            <div className= "row">
              <img className="card-img-top img-responsive col-md-4" 
                src={article.urlToImage} alt={article.title}>
              </img>
              <div className="card-block col-md-8 border-raduis">
              <h4 className="card-title main-header">{article.title}</h4>
              <p className="card-text">{article.description}</p> 
              <a href={article.url} target="_blank" 
                className="btn btn-success">More ...
              </a>       
              </div>   
           </div>   
           </div>
            )
          })}
        </div>
      </div>
    )
  }
};


