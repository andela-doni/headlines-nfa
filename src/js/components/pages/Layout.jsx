import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router";
import Cookies from 'js-cookie';
import Footer from "../layout/Footer.jsx";
import Nav from "../layout/Nav.jsx";
import createHistory from 'history/createBrowserHistory';
import AuthenticationStore from '../../stores/AuthenticationStore';
import { isLoggin } from '../../actions/AuthenticationAction';
import Login from './Login.jsx';
const isLoggedIn = Cookies.get('debprojdb');
const history = createHistory({
  forceRefresh: true
})
export default class Layout extends React.Component {
  /**
   * constructor for Layout class
   * @constructor
   */
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = this.userState();
    
  }
//Mounts the api after the articles have been mounted
/**
   * Adds event listener
   * Layout mounting
   * @method componentDidMount
   */
  componentDidMount() {
    AuthenticationStore.addChangeListener(this.login);
  }
  /**
   * unmounts the layout Component
   * Removes event listener
   * @method componentWillUnMount
   */
  componentWillUnmount() {
    AuthenticationStore.removeChangeListener(this.login)
  }
   /**
   * login function
   * @method login
   */
  login() {
    this.setState(this.userState())
  }
/**
   * fetches user info
   * @method userState
   */
  userState() {
    return {
      user: AuthenticationStore.getUser()
    }
  }
  /**
   * @method
   * renders the layout Component
   */
render() {
  const { location } = this.props;
  const containerStyle = {
    marginTop: "60px"
  }; 

      return (

      <div>
        <Nav location={location} 
          isLoggedIn={this.state.user.isAuthenticated}
             />
            <div class="container" style={containerStyle}>
              <div class="row">
                <div class="col-lg-12">
                  {this.props.children}
                </div>
              </div>
              <Footer />
            </div>
          </div>

          );
  }
}

