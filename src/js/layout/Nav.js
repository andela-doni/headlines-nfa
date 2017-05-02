import React from "react";
import { IndexLink, Link } from "react-router";
import Cookies from 'js-cookie';
import createHistory from 'history/createBrowserHistory';


const history = createHistory({
  forceRefresh: true
})

export default class Nav extends React.Component {
  constructor() {
    super()
  
    this.state = {
      collapsed: true,
      user:Cookies.get('debprojdb')
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }
  componentWillMount(){
    // if(this.state.user === undefined){
    //   history.push('/login')
    // }
  }

  render() {
    const { location,isLoggedIn } = this.props;
    const { collapsed, user } = this.state;
    const welcomeClass = location.pathname === "/" ? "active" : "";
    const loginClass = location.pathname.match(/^\/login/) ? "active" : "";
    const articlesClass = location.pathname.match(/^\/articles/) ? "active" : "";

    const navClass = collapsed ? "collapse" : "";
    
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={loginClass}>
                <Link to={!isLoggedIn? "login":"logout"} onClick={this.toggleCollapse.bind(this)}>{isLoggedIn? "Logout":"Login"}</Link>
              </li>
        
              <li className={welcomeClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Welcome</IndexLink>
              </li>
              {/*<li class={articlesClass}>
                <Link to="/articles" onClick={this.toggleCollapse.bind(this)}>Articles</Link>
              </li>*/}
            </ul>
          </div>
        </div>
        <h1></h1>
      </nav>
    );
  }
}
