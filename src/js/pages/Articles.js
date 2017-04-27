import React from 'react';
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
      sortType:''
    };

    this.getArticles = this.getArticles.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }



  componentDidMount() {

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

  handleChange(event){
    console.log('events',event.target.value)
    console.log()
    this.setState(getArticles(this.props.params.article, event.target.value));  
  }
 

  render() {
    //console.log("params of article", this.props.location.query)
    let sorts = this.props.location.query.sort
    sorts = sorts.split(',');
    console.log('sorts', sorts)
    const { articles } = this.state;
    //console.log(this.state);
    return (
      <div class="jumbotron">
        <h1>Headlines articles</h1>
        <p>Articles from over 70 sources</p>
        <div>
            <select class="form-control" id="select" onChange={this.handleChange.bind(this)}>{sorts.map(function(type,index){
                  return <option value = {type}>{type}</option>;
              })}</select>
        </div>
      
        <div>
          {articles.map((article, index) => {
            //console.log(article);
            return <div key={index}>
              <h4><a href={article.url} target="_blank">Author: {article.author}</a></h4>
              <p>{article.description}</p>
            </div>
          })}
        </div>

      </div>
    )
  }
};


