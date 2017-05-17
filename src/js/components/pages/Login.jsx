import React from 'react';
import GoogleLogin from 'react-google-login';
import Cookies from 'js-cookie';
import { browserHistory } from 'react-router';
import { isLoggin } from '../../actions/AuthenticationAction';

 /**
   * fetches user details and stores in cookie
   * @method responseGoogle
   * @param {response} response stored in cookie
   * @returns {null} no returns
   */
export const responseGoogle = (response) => {
  const { name, email, imageUrl } = response.profileObj;
  const userDetails = {
    name,
    email,
    image: imageUrl
  };
  Cookies.set('debprojdb', userDetails, { expires: 0.125 });
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
      <div className="clearfix" />

      <div className="container">
        <div className="inner cover row">
          <div className="col-md-6 col-md-offset-3">
            <h1 className="main-header spacing">Headlines</h1>
            <p className="lead main-header">
              Welcome to Headlines! This is a Newsfeed
               Application that helps you aggregate
               news articles from over 70 different sources.
            </p>
            <p className="lead main-header" > Login below to view.</p>
            <div className="col-md-6 col-md-offset-3">
              <GoogleLogin
                className="classLogin"
                clientId={process.env.ID}
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
