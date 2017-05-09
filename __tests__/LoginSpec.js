import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import GoogleLogin from 'react-google-login';
import Login, { responseGoogle } from '../src/js/components/pages/Login';
import Cookies from 'js-cookie';
import { browserHistory } from 'react-router';
import sinon from 'sinon';


function setup() {
  return shallow(<Login />);
};

describe('Component with google login', () => {
  let wrapper;
  let logInButton;
  let googleSpy;
  beforeEach(() => {
    wrapper = setup();
  });
  
  it('it should render the Google component', () => {
    expect(wrapper.find('Login')).toExist();
  });

  it ('should render a login button', () => {
    expect(wrapper.find('button')).toExist();
  });

  it ('the login render the login component with the right text', () => {
    const loginComponent = wrapper.find('t');    
    expect(loginComponent.props().buttonText).toEqual('Login');      
  })

xit('should login', () => {
    logInButton = wrapper.find('button');
    logInButton.simulate('click');
    // expect(googleSpy.calledOnce).to.equal(true);
    expect(true).toEqual(true);
  })
});

describe('responseGoogle()', () => {
  let cookie;
  let history;

  const response = {
    profileObj: {
      name: 'John',
      email: 'john@gmail.com',
      imageUrl: 'john_pic_url'
    }
  }

  const expectedUserDetails = {
    name: response.profileObj.name,
    email: response.profileObj.email,
    image: response.profileObj.imageUrl
  }

  beforeEach(() => {
    cookie = sinon.spy(Cookies, 'set');
    let fakeHistory = sinon.spy();
    history = sinon.stub(browserHistory, 'push');
  })

  afterEach(() => {
    cookie.restore();
    history.restore();
  })
  
 
  describe('saves the user details in the cookie', () => {
    it('saves the right details', () => {
      responseGoogle(response);
      expect(cookie.callCount).toEqual(1)
      expect(cookie.firstCall.args).toEqual(['debprojdb', 
                                            expectedUserDetails]);
    });
  });

  // changes the url to the homepage
  it('redirects to the homepage', () => {
    responseGoogle(response);
    expect(history.callCount).toEqual(1)
    expect(history.firstCall.args).toEqual('/')

  })
})