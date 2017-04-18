import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const welcomeClass = location.pathname === "/" ? "active" : "";
    const sourcesClass = location.pathname.match(/^\/sources/) ? "active" : "";
    const favouritesClass = location.pathname.match(/^\/favourites/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={welcomeClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Welcome</IndexLink>
              </li>
              <li class={sourcesClass}>
                <Link to="sources" onClick={this.toggleCollapse.bind(this)}>Sources</Link>
              </li>
              <li class={favouritesClass}>
                <Link to="favourites" onClick={this.toggleCollapse.bind(this)}>Favourites</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
