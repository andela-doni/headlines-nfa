import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Sources from "./pages/Sources";
import Welcome from "./pages/Welcome";
import Layout from "./pages/Layout";
import Favourites from "./pages/Favourites";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Cookies from 'js-cookie';

const app = document.getElementById('app');
const isLoggedIn = Cookies.get('debprojdb') !== undefined;

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Welcome} />
      
      <Route path="login" name="login" component={Login} />
      <Route path="logout" name="logout" component={Logout} />
     
      
    </Route>
  </Router>,
app);
