import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../layout/Footer.jsx';
import Nav from '../layout/Nav.jsx';
import AuthenticationStore from '../../stores/AuthenticationStore';


export default class Layout extends React.Component {
  /**
   * constructor for Layout class
   * @param {props} props as params
   * @constructor
   */
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = this.userState();
  }
/**
   * Adds event listener
   * Layout mounting
   * @returns {null} nothing is returned
   * @method componentDidMount
   */
  componentDidMount() {
    AuthenticationStore.addChangeListener(this.login);
  }
  /**
   * unmounts the layout Component
   * Removes event listener
   * @returns {null} nothing is returned
   * @method componentWillUnMount
   */
  componentWillUnmount() {
    AuthenticationStore.removeChangeListener(this.login);
  }
   /**
   * login function
   * @returns {null} nothing was returned
   * @method login
   */
  login() {
    this.setState(this.userState());
  }
/**
   * fetches user info
   * @returns {null} nothing was returned
   * @method userState
   */
  userState() {
    this.logs = '';
    return {
      user: AuthenticationStore.getUser()
    };
  }
  /**
  * @returns {null} nothing was returned
   * renders the layout Component
   */
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: '60px'
    };

    return (

      <div>
        <Nav location={location}
          isLoggedIn={this.state.user.isAuthenticated}
             />
            <div className="container" style={containerStyle}>
              <div className="row">
                <div className="col-lg-12">
                  {this.props.children}
                </div>
              </div>
              <Footer />
            </div>
          </div>

    );
  }
}

Layout.propTypes = {
  location: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired
};
