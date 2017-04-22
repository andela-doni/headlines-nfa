import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Articles from "./pages/Articles";
import Welcome from "./pages/Welcome";
import Layout from "./pages/Layout";
import Favourites from "./pages/Favourites";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Cookies from 'js-cookie';

const app = document.getElementById('app');
const isLoggedIn = Cookies.get('debprojdb') !== undefined;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route>
      <Route path="/login" name="login" component={Login} />
      <Route path="/" component={Layout}>
        <IndexRoute component={Welcome} />
        <Route path="/articles" name="articles" component={Articles} />
        <Route path="logout" name="logout" component={Logout} />
      </Route>
    </Route>
  </Router>,
app);
