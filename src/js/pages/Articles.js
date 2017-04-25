import React from 'react';
import ArticlesStore from '../stores/ArticlesStore';
import { getArticles } from '../actions/ArticlesActions';
import { getSources } from '../actions/SourcesActions';
import SourceStore from '../stores/SourceStore';


export default class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: ArticlesStore.getAll(),
    };

    this.getArticles = this.getArticles.bind(this);


    //   const mySources = this.state.sources;
    //   mySources.map((mySource) => {
    //     <option>{}</option>
    //     console.log('mySource', mySource.sortBysAvailable);
    //   })
    //   //console.log('this.getSorts', this.getSorts());
    //   console.log('this.state.articles', this.state.articles);

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
    //console.log(this.state.articles,'aticles state');
  }
  // getSorts(){
  //   const mySources = this.state.sources;
  //   mySources.map((mySource) => {
  //     <option>{}</option>
  //     console.log('mySource', mySource.sortBysAvailable);
  //   })
  //   //console.log('this.getSorts', this.getSorts());
  //   console.log('this.state.articles', this.state.articles);

  
  render() {
    console.log("params of article", this.props.location.query)
    let sorts = this.props.location.query
    console.log('sorts', sorts)
    const { articles } = this.state;
    //console.log(this.state);
    return (
      <div class="jumbotron">
        <h1>Headlines articles</h1>
        <p>Articles from over 70 sources</p>

        <div>
          {/*{sorts.map((sort,index) => {

            return
            <div>
            <option onChange={handleChange}>{sort}</option>
            </div>
          })}*/}

          {/*{sorts.map((sort, index) => {
            //console.log(article);
            return <div>
              <h4><a href={article.url} target="_blank">{sort}</a></h4>
            </div>
          })}*/}
        </div>
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


