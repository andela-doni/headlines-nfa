import React from 'react';
import Cookies from 'js-cookie';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({
  forceRefresh: true
})

export default class Logout extends React.Component {
  componentWillMount() {
    Cookies.remove('debprojdb');
    history.push('/login');
  }
  render() {
    return (<h1>Logged out</h1>);
  }
}