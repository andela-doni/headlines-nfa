import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Articles from "./components/pages/Articles";
import NewsSources from "./components/pages/NewsSources";
import Layout from "./components/pages/Layout";
import Login from "./components/pages/Login";
import Cookies from 'js-cookie';

const app = document.getElementById('app');
const onEnter = (nextState, replace) => {
  const isLoggedIn = Cookies.get('debprojdb') !== undefined;
  if(!isLoggedIn) {
    replace('/login');
  }
}


ReactDOM.render(
  <Router history={browserHistory}>
    <Route>
      <Route path="/login" name="login" component={Login} />
      <Route path="/" component={Layout}>
        <IndexRoute component={NewsSources} onEnter={onEnter}/>
        <Route path="/sources/:article" name="articles" component={Articles} onEnter={onEnter}/>
        <Route path="*" component={() => <h1>404</h1>}/>
      </Route>
    </Route>
  </Router>,
app);
