import React from 'react';
import GoogleLogin from 'react-google-login';
import Cookies from 'js-cookie';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({
  forceRefresh: true
})
//fetches user info and stores it in a cookie called debprojdb
const responseGoogle = (response) => {
  const {name, email, imageUrl} = response.profileObj;
  let user_details = {
    name,
    email,
    image: imageUrl
  };
  Cookies.set('debprojdb', user_details);
  history.push('/');
};


export default class Login extends React.Component {
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="428253049382-tec2fhihi9gj19m8ugqdfp24uj105mum.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    )
  }
}