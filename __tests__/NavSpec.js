import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { browserHistory } from 'react-router';
import Nav from '../src/js/components/layout/Nav.jsx';
/* eslint-disable no-unused-expressions*/

describe('Navigation component with the elements available', () => {
  const wrapper = shallow(<Nav />);
  it('it should render div elements', () => {
    expect(wrapper.find('navbar')).toExist;
  });

  it('it should contain a link to the navClass', () => {
    expect(wrapper.find('button')).toExist;
  });
  it('it should contain a link to the navClass', () => {
    expect(wrapper.find('a')).toExist;
  });
  it('it should contain a link to the navClass', () => {
    expect(wrapper.find('span')).toExist;
  });
  it('it should contain a link to the navClass', () => {
    expect(wrapper.find('icon-bar')).toExist;
  });
});

sinon.spy(Nav.prototype, 'logout');
sinon.spy(Nav.prototype, 'render');
sinon.spy(Nav.prototype, 'setState');

describe('if component mounted function exists', () => {
  it(' Logout exists', () => {
    expect(Nav.prototype.logout.calledOnce).toExist;
  });
  it(' render exists', () => {
    expect(Nav.prototype.render.calledOnce).toExist;
  });
  it(' render exists', () => {
    expect(Nav.prototype.setState.calledOnce).toExist;
  });
});

describe('logout function ()', () => {
  let history;

  beforeEach(() => {
    history = sinon.stub(browserHistory, 'push');
  });
  afterEach(() => {
    history.restore();
  });
  it('redirects to the login', () => {
    Nav.prototype.logout();
    expect(history.callCount).toEqual(1);
    expect(history.firstCall.args).toEqual('/login');
  });
});

