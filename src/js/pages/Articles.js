import React from 'react';
import ArticlesStore from '../stores/ArticlesStore';
import { getArticles } from '../actions/ArticlesActions';
import {getSources} from '../actions/SourcesActions';
import SourceStore from '../stores/SourceStore';


export default class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: SourceStore.getAll(),
      articles: ArticlesStore.getAll(),
    };

    this.getArticles = this.getArticles.bind(this);
    console.log('this.state.articles.source', this.state.articles.source);
    const mySources = this.state.sources;
    mySources.map((mySource) => {
      <option>{}</option>
      console.log('mySource', mySource.sortBysAvailable);
    })
    //console.log('this.getSorts', this.getSorts());
    console.log('this.state.articles', this.state.articles);
  }


  componentDidMount() {
    getArticles(this.props.params.article, 'top');
   
    ArticlesStore.addChangeListener(this.getArticles)

  }

  componentWillUnMount() {
    SourceStore.removeChangeListener(this.getArticles);
  }

  getArticles() {
    this.setState({
      articles: ArticlesStore.getAll()
    });
    //console.log(this.state.articles,'aticles state');
  }
  // getSorts(){
  //   let sorts = this.state.sources;
  //   sorts.map((sort)=>{
  //     console.log(sort);
  //   })
  // }
  render() {
    // console.log('this.getSorts', this.getSorts());
    const { articles } = this.state;
    //console.log(this.state);
    return (
      <div class="jumbotron">
        <h1>Headlines articles</h1>
        <p>Articles from over 70 sources</p>

        <select class="form-control" id="select">
          <option>SortBy</option>
        </select>

        <div>

          {articles.map((article, index) => {
            //console.log(article);
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


