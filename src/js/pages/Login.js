import React from 'react';
import GoogleLogin from 'react-google-login';
import Cookies from 'js-cookie';
import { browserHistory } from "react-router";
import AuthenticationStore from '../stores/AuthenticationStore';
import { isLoggin } from '../actions/AuthenticationAction';


//fetches user info and stores it in a cookie called debprojdb
export const responseGoogle = (response) => {
  const {name, email, imageUrl} = response.profileObj;
  let user_details = {
    name,
    email,
    image: imageUrl
  };
  Cookies.set('debprojdb', user_details);
  isLoggin();
  browserHistory.push('/');
};


const Login = () => (
    <div>
      <GoogleLogin
        clientId="428253049382-tec2fhihi9gj19m8ugqdfp24uj105mum.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );


export default Login;