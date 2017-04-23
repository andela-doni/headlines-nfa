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
  }


  componentDidMount() {
    getArticles(this.props.params.article, 'top');
    // console.log(this.props.params);
    ArticlesStore.addChangeListener(this.getArticles)

  }

  componentWillUnMount(){
    SourceStore.removeChangeListener(this.getArticles);
  }

  getArticles() {
    this.setState({
      articles: ArticlesStore.getAll()
    });
  }
  render() {
    const { articles } = this.state;
    console.log(this.state);
    return (
      <div class="jumbotron">
        <h1>Headlines articles</h1>
        <p>Articles from over 70 sources</p>
        <div>

          {articles.map((article, index) => {
            console.log(article);
            return <div key={index}>
              <h4><a href={article.url} target="_blank">{article.author}</a></h4>
              <p>{article.description}</p>
            </div>
          })}
        </div>
      </div>
    )
  }
};


