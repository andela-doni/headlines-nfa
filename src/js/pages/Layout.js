import React from "react";
import { Link } from "react-router";
import Cookies from 'js-cookie';
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
const isLoggedIn = Cookies.get('debprojdb');
import createHistory from 'history/createBrowserHistory';
import AuthenticationStore from '../stores/AuthenticationStore';
import { isLoggin } from '../actions/AuthenticationAction';
import Login from './Login';
const history = createHistory({
  forceRefresh: true
})
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = this.userState();
    
  }

  componentDidMount() {
    AuthenticationStore.addChangeListener(this.login);
  }
  componentWillUnmount() {
    AuthenticationStore.removeChangeListener(this.login)
  }
  login() {
    this.setState(this.userState())
  }

  userState() {
    return {
      user: AuthenticationStore.getUser()
    }
  }

  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    }; //console.log(this.state.user);

      return (

      <div>

            <Nav location={location} isLoggedIn={this.state.user.isAuthenticated} />

            <div class="container" style={containerStyle}>
              <div class="row">
                <div class="col-lg-12">
                  <h1>Headlines</h1>
                  {this.props.children}
                </div>
              </div>
              <Footer />
            </div>
          </div>

          );
  }
}
