import React from 'react';
import Cookies from 'js-cookie';
import createHistory from 'history/createBrowserHistory';
import {logout} from '../actions/AuthenticationAction';

const history = createHistory({
  forceRefresh: true
})

export default class Logout extends React.Component {
  componentWillMount() {
    logout();
    Cookies.remove('debprojdb');
    history.push('/login');
  }
  render() {
    return (<h1>Logged out</h1>);
  }
}