import React from "react";
import Title from "../components/layout/Title";


export default class Sources extends React.Component {
  constructor(){
    super();
    this.state={
      title:"News Sources"
    };
  }
  
  render() {
    
    return (
      <div>
        <Title title ={this.state.title}/>
        <input value= {this.state.title} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
