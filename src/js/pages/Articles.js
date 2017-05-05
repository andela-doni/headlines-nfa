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
    console.log('events', event.target.value)
    console.log()
    this.setState(getArticles(this.props.params.article, event.target.value));
  }


  render() {
    //console.log("params of article", this.props.location.query)
    let sorts = this.props && this.props.location && this.props.location.query.sort
    //let sorts = this.props.location.query.sort
    sorts = sorts && sorts.split(',');
    console.log('sorts', sorts)
   const articles = this.state.articles;
    //console.log(this.state);
    return (
      <div >
        <div>
          <select className="form-control" id="select" onChange={this.handleChange.bind(this)}>
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
                <div className="col-md-4 "><img class="card-img-top img-responsive " src={article.urlToImage} alt="Card image cap"></img></div>
                <div className="panel panel-default  col-md-8" key={article.url}>
                  <div className="panel-heading"><a href={article.url} target="_blank">Title: {article.title}</a> {article.publishedAt}</div>
                  <div className="panel-body">
                    <p> {article.description} </p>
                     <a href="https://www.facebook.com/sharer/sharer.php?u={articles.url}" target="_blank"> <Icon type="Facebook" className="shares-facebook" width ="3em" height="3em" color="#333"/></a>
                     <a href="http://twitter.com/share?text=Articles&url<?=urlencode($url)?>"target="_blank"title="Click to post to Twitter"> <Icon type="Twitter" className="shares-twitter" width ="3em" height="3em"/></a>
                     <a href=""><Instagram className="shares-instagram" width ="3em" height="3em"/></a>
                    
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


