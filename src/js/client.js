import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Sources from "./pages/Sources";
import Welcome from "./pages/Welcome";
import Layout from "./pages/Layout";
import Favourites from "./pages/Favourites";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Welcome} />
      <Route path="sources(/:sources)" name="sources" component={Sources} />
      <Route path="favourites" name="favourites" component={Favourites} />
    </Route>
  </Router>,
app);
