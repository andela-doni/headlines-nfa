import React from 'react';
 // Title Component
export default class Title extends React.Component{
    render (){
        return (<h1>{this.props.title}</h1>);
    }
}