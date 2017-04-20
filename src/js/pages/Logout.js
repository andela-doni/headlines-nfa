import React from 'react';
import Cookies from 'js-cookie';
import createHistory from 'history/createBrowserHistory';
import Login from './Login.js'

const history = createHistory({
  forceRefresh: true
})

export default class Logout extends React.Component{
  componentWillMount() {
     
     Cookies.remove('debprojdb');
     //cookie remove to implement logout
     //console.log("hello")
     //console.log(Login.user_details)//works
     history.push('/#/login');
    }
    render (){
      return(<h1>Logged out</h1>);
    }
}