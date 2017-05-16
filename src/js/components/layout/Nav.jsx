import React from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link, browserHistory } from 'react-router';
import Cookies from 'js-cookie';
import { logout } from '../../actions/AuthenticationAction';

export default class Nav extends React.Component {
/**
 * @param {null} null parameter
 */
  constructor() {
    super();

    this.state = {
      collapsed: true,
      user: Cookies.get('debprojdb')
    };
    this.logout = this.logout.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.log = '';
  }
/**
 * @returns {null} null return
 */
  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  }
/**
 * @param {null} null parameter
 * @returns {null} null retuen
 */
  logout() {
    logout();
    this.setLog = '';
    browserHistory.push('/login');
  }
/**
 * @param {null} render method for Nav Component
 * @returns {null} returns jsx Components
 */
  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const newsClass = location
    && location.pathname === '/' ? 'active' : '';
    const loginClass = location && location.pathname
    && location.pathname.match(/^\/login/) ? 'active' : '';

    const navClass = collapsed ? 'collapse' : '';

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top"
        role="navigation">
        <div className="container">
          <div className="navbar-header">
            <h4 className="navPadding main-header">
              <IndexLink to="/" onClick="this.toggleCollapse">
                Headlines
              </IndexLink></h4>
            <button type="button" className="navbar-toggle"
            onClick="this.toggleCollapse" >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div className={`navbar-collapse ${navClass}`}
          id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav  pull-right navPad">
              <li className={newsClass}>
                <IndexLink to="/"
                onClick="toggleCollapse">Sources</IndexLink>
              </li>
              <li className={loginClass}>
                <Link to="/login" onClick={this.logout}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
        <h1 />
      </nav>
    );
  }
}

Nav.propTypes = {
  params: PropTypes.element.isRequired,
  location: PropTypes.element.isRequired
};
