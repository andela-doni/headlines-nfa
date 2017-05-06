import React from 'react';
// import PropTypes from 'prop-types';
import Icon  from 'react-share-icons';
import Instagram from 'react-share-icons/lib/Instagram';
import ArticlesStore from '../stores/ArticlesStore';
import { getArticles } from '../actions/ArticlesActions';
import { getSources } from '../actions/SourcesActions';
import { getSorts } from '../actions/SortActions';
import SortStore from '../stores/SortStore';

export default class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: ArticlesStore.getAll(),
      sortType: ''
    };
    this.getArticles = this.getArticles.bind(this);
  }
  componentDidMount() {
    if (!this.props.params) return;
    getArticles(this.props.params.article, 'top');
    ArticlesStore.addChangeListener(this.getArticles);
  }
  componentWillUnMount() {
    SourceStore.removeChangeListener(this.getArticles);
  }
  getArticles() {
    this.setState({
      articles: ArticlesStore.getAll()
    });
  }
  handleChange(event) {
    this.setState(getArticles(this.props.params.article, event.target.value));
  }
  render() {
    let sorts = this.props 
      && this.props.location 
      && this.props.location.query.sort
    sorts = sorts && sorts.split(',');
    return (
      <div >
        <div>
          <select className="form-control" id="select" 
            onChange={this.handleChange.bind(this)}>
            {sorts && sorts.map(function (type, index) {
              return <option value={type}>{type}</option>;
            })}
          </select>
        </div>

        <div className="card-group">
          {articles && articles.map((article, index) => {
            //console.log(article);
            return (
              <div class="row">
                <div className="col-md-4 ">
                  <img 
                  class="card-img-top img-responsive " 
                  src={article.urlToImage} 
                  alt="Card image cap">
                </img>
              </div>
                <div className="panel panel-default  col-md-8" 
                  key={article.url}>
                  <div className="panel-heading">
                    <a href={article.url} target="_blank">Title: {article.title}</a>
                </div>
                  <div className="panel-body">
                    <p> {article.description} </p>
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


