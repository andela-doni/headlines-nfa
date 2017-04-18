import React from "react";
//import {SearchSources} from '../utils/news';
import request from 'superagent';
import SearchStore from '../stores/SearchStore';
import {searchSources} from '../actions/SearchActions';


export default class Welcome extends React.Component {
  
  constructor(){
    super();
    this.getSources = this.getSources.bind(this);
    this.state ={
      sources: SearchStore.getAll(),
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
  render() {
   const {sources} = this.state;
    
    return(
    <div class="jumbotron">
      <h1>Headlines</h1>
      <p>News from over 70 sources
      </p>
      <ul>
      {
        sources && sources.map(source=>{
           return <div> <li>{source.name}{source.url}</li></div>
        })
      }
      </ul>
    </div>
    )
  }
};


