import React from 'react';
import GoogleLogin from 'react-google-login';
import Cookies from 'js-cookie';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({
  forceRefresh: true
})

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
  // onSignIn() {
  //   var profile = googleUser.getBasicProfile();
  //   responseGoogle({
  //     profileObj: {
  //       name: profile.getName(),
  //       email: profile.getEmail(),
  //       imageUrl: profile.getImageUrl()
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        {/*<div
          class="g-signin2"
          onClick={this.onSignIn}
          data-onsuccess="onSignIn" />
        <button
          onClick={this.onSignIn}
          className="ourButton">Sign in now</button>
          */}
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