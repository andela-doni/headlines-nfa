import React from 'react';
import GoogleLogin from 'react-google-login';
import Cookies from 'js-cookie';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({
  forceRefresh: true
})

const responseGoogle = (response)=>{
    console.log(user_details);
  let data = response.profileObj;
  let user_details = {name:data.name,email:data.email,image:data.imageUrl};
  Cookies.set('debprojdb',user_details);
   history.push('/');
};


export default class Login extends React.Component{

 
  render(){
    return (<div>
     <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
    </div>)
  }
  
}