import React from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import Cookies from 'js-cookie';
import { browserHistory } from "react-router";
import AuthenticationStore from '../../stores/AuthenticationStore';
import { isLoggin } from '../../actions/AuthenticationAction';
//fetches user info and stores it in a cookie called debprojdb
 /**
   * fetches user details and stores in cookie
   * @method responseGoogle
   */
export const responseGoogle = (response) => {
  const {name, email, imageUrl} = response.profileObj;
  let user_details = {
    name,
    email,
    image: imageUrl
  };
  Cookies.set('debprojdb', user_details,{ expires: 0.125 });
  isLoggin();
  browserHistory.push('/');
};

const Login = () => (
    <div >
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Headlines</a>
          </div>
        </div>
      </nav>
      <div className="clearfix"></div>

      <div className="container">
        <div className="inner cover row">
          <div className="col-md-6 col-md-offset-3">
            <h1 className="main-header spacing">Headlines</h1>
            <p className="lead main-header">
              Welcome to Headlines! This is a Newsfeed 
              Application that helps you aggregate news 
              articles from over 70 different sources.
            </p>
            <p className="lead main-header" > Login below to view.</p>
            <div className="col-md-6 col-md-offset-3">
              <GoogleLogin
                className="classLogin"
                clientId=
                "428253049382-tec2fhihi9gj19m8ugqdfp24uj105mum.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
export default Login;