import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Layout from '../src/js/components/pages/Layout.jsx';

const wrapper = shallow(<Layout />);
/* eslint-disable no-unused-expressions*/

describe('NewsSources Component with news sources', () => {
  it('it should render div elements', () => {
    expect(wrapper.find('div')).toExist;
  });
  it('it should render a h1 element for title', () => {
    expect(wrapper.find('h1')).toExist;
  });
});

sinon.spy(Layout.prototype, 'componentDidMount');

describe('if component mounted function exists', () => {
  it(' componentDidMount exists', () => {
    expect(Layout.prototype.componentDidMount.calledOnce).toExist;
  });

  it('user state function that fetches info from the store exists', () => {
    expect(Layout.prototype.login).toExist;
  });
});

describe('helper functions', () => {
  it('type of userState', () => {
    expect(typeof Layout.prototype.userState).toBe('function');
  });
  it('should return login function', () => {
    expect(typeof Layout.prototype.login).toBe('function');
  });
});
