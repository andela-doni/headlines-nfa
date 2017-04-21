import React from "react";
import request from 'superagent';
import SourceStore from '../stores/SourceStore';
import {getSources} from '../actions/SourcesActions';
import {getArticles} from '../actions/ArticlesActions'
export default class Welcome extends React.Component { 
  constructor(){
    super();
    this.getSources = this.getSources.bind(this);
    this.state ={
      sources: SourceStore.getAll(),
      search: ""
    };
  }
  
  componentWillMount(){
        // SourceStore.on(this.getSources);
    getSources();
  }
  
  componentDidMount(){
    SourceStore.addChangeListener(this.getSources);
  }

  componentWillUnMount(){
    SourceStore.removeChangeListener(this.getSources);
  }

  getSources(){
    this.setState({
      sources: SourceStore.getAll(), 
    });
    console.log(SourceStore.getAll(),);
  }
  
  handleChange(event){
    //const searchedSources = e.target.value;
    //this.changeSources(this.state.sources);
    //console.log(event);
    this.setState({search: event.target.value})
    console.log(this.state.search)
  }
  render() {
   const {sources} = this.state;   
   const filteredSources = this.state.sources.filter(source=>source.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1); 
  
    return(
    <div class="jumbotron">
      <h1>Headlines</h1>
      <p>News from over 70 sources
      </p>
        <input class = "searchbox col col-lg-12" value={this.state.search} onChange={this.handleChange.bind(this)}/>
      <div>
    
      {filteredSources.map(source=>{
            return <div key={source.id}>
                      <h4><a href ="#">{source.name}</a></h4>
                          <p>{source.description}</p>
                      </div>                      

        })}
      </div>
      </div>
    )
  }
};


