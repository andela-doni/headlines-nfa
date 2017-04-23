import React from 'react';
import ArticlesStore from '../stores/ArticlesStore';
import { getArticles } from '../actions/ArticlesActions';

export default class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: ArticlesStore.getAll(),
    };

    this.getArticles = this.getArticles.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }


  componentDidMount() {
    getArticles(this.props.params.article, 'top');
    // console.log(this.props.params);
    ArticlesStore.addChangeListener(this.getArticles)

  }

  componentWillUnMount() {
    SourceStore.removeChangeListener(this.getArticles);
  }

  getArticles() {
    this.setState({
      articles: ArticlesStore.getAll()
    });
  }
  handleClick(position){
     getArticles(this.props.params.article, position );
         

  }
  render() {
    const { articles } = this.state;
    return (
      <div>
        <h1>Articles</h1>
        <ul class="list-group">
          <li class="list-group-item" onClick={this.handleClick(top).bind(this)}>
            
           {/*<link to ={source.sortBysAvailable}> Top </link>*/}
           Top
         </li>
          <li class="list-group-item" onClick={this.handleClick(latest).bind(this)}>
            Latest
            {/*<link to ={hey}> Latest </link>*/}
         </li>
          <li class="list-group-item" onClick={this.handleClick(top).bind(this)}>
            Popular
            {/*<link to ={hey}> Popular </link>*/}
         </li>
        </ul>
        <div>

          {articles.map((article, index) => {
            //console.log(article);
            return <div key={index}>
              <h4><a href={article.url} target="_blank">{article.title}</a></h4>
              <p></p>
              <p>Date published: {article.publishedAt}</p><p>{article.description}</p>
            </div>
          })}
        </div>
      </div>
    )
  }
};


