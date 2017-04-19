import React from "react";
//import {SearchSources} from '../utils/news';
import request from 'superagent';
import SearchStore from '../stores/SearchStore';
import {searchSources} from '../actions/SearchActions';
const API_KEY="213327409d384371851777e7c7f78dfe";
let link =  `https://newsapi.org/v1/articles?source={source.name}&sortBy=latest&apiKey={API_KEY}`
export default class Welcome extends React.Component {
  
  constructor(){
    super();
    this.getSources = this.getSources.bind(this);
    this.state ={
      sources: SearchStore.getAll(),
      search: ""
    };
  }
  
  componentWillMount(){
    
        // SearchStore.on(this.getSources);
    searchSources();
  }
  
  componentDidMount(){
    SearchStore.addChangeListener(this.getSources);
  }

  componentWillUnMount(){
    SearchStore.removeChangeListener(this.getSources);
  }

  getSources(){
    this.setState({
      sources: SearchStore.getAll(),
    });
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
                      <h4><a href= {link} >{source.name}</a></h4>
                          <p>{source.description}</p>
                      </div>                      

        })}
      </div>
      </div>
    )
  }
};


