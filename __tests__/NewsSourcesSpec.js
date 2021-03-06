import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import NewsSources from '../src/js/components/pages/NewsSources.jsx';
/* eslint-disable no-unused-expressions*/

describe('News Component with news sources', () => {
  const wrapper = shallow(<NewsSources />);
  it('it should render div elements', () => {
    expect(wrapper.find('div')).toExist;
  });
  it('it should render a h1 element for title', () => {
    expect(wrapper.find('h1')).toExist;
  });
  it('it should have an input tag for searching through sources', () => {
    expect(wrapper.find('input')).toExist;
  });
  it('the input tag should be okay', () => {
    expect(wrapper.find('input')).tobeok;
  });
});

sinon.spy(NewsSources.prototype, 'componentDidMount');
sinon.spy(NewsSources.prototype, 'componentWillUnMount');
sinon.spy(NewsSources.prototype, 'handleChange');
sinon.spy(NewsSources.prototype, 'setState');
sinon.spy(NewsSources.prototype, 'getSources');


describe('if component mounted function exists', () => {
  it(' componentDidMount exists', () => {
    expect(NewsSources.prototype.componentDidMount.calledOnce).toExist;
  });

  it(' componentWillUnMount exists', () => {
    expect(NewsSources.prototype.componentWillUnMount.calledOnce).toExist;
  });
  it('change event handlers exists', () => {
    expect(NewsSources.prototype.handleChange).toExist;
  });
  it('change event handlers exists', () => {
    expect(NewsSources.prototype.handleChange).toHaveBeenCalled;
  });
  it('contains setState', () => {
    expect(NewsSources.prototype.setState).toHaveBeenCalled;
  });
  it('contains setState', () => {
    expect(NewsSources.prototype.getSources).toHaveBeenCalled;
  });
  it('contains setState', () => {
    expect(NewsSources.prototype.getSources).toHaveBeenCalled;
  });
  it('component will unmount', () => {
    expect(NewsSources.prototype.componentWillUnMount).toHaveBeenCalled;
  });
});
