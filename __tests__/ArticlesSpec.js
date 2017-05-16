import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import { mount } from 'enzyme';
import Articles from '../src/js/components/pages/Articles.jsx';
/* eslint-disable no-unused-expressions*/
describe('Articles Component', () => {
  const wrapper = mount(<Articles />);

  it('it should render div elements', () => {
    expect(wrapper.find('div')).toExist;
  });
  it('it should render an h4 element', () => {
    expect(wrapper.find('h4')).toExist;
  });
  it('it should render an a element', () => {
    expect(wrapper.find('a')).toExist;
  });
  it('it should render an img element', () => {
    expect(wrapper.find('img')).toExist;
  });
  it('it should render  an select element', () => {
    expect(wrapper.find('select')).toExist;
  });
  it('it should render a class with col-md-4', () => {
    expect(wrapper.find('col-md-4')).toExist;
  });
  it('it should render with a key of source.id ', () => {
    expect(wrapper.find('source.id')).toExist;
  });
});

sinon.spy(Articles.prototype, 'componentDidMount');
sinon.spy(Articles.prototype, 'componentWillUnMount');
sinon.spy(Articles.prototype, 'getArticles');
sinon.spy(Articles.prototype, 'handleChange');
sinon.spy(Articles.prototype, 'setState');


describe('if component mounted function exists', () => {
  it(' componentDidMount exists', () => {
    expect(Articles.prototype.componentDidMount.calledOnce).toExist;
  });

  it(' componentWillUnMount exists', () => {
    expect(Articles.prototype.componentWillUnMount.calledOnce).toExist;
  });
  it('change event handlers exists', () => {
    expect(Articles.prototype.handleChange.calledOnce).toExist;
  });
  it('change event handlers exists', () => {
    expect(Articles.prototype.handleChange).toHaveBeenCalled;
  });
  it('contains getArticles', () => {
    expect(Articles.prototype.getArticles.calledOnce).toExist;
  });
  it('contains getArticles', () => {
    expect(Articles.prototype.getArticles).toHaveBeenCalled;
  });
  it('contains setState', () => {
    expect(Articles.prototype.setState).toHaveBeenCalled;
  });
  it('contains setState', () => {
    expect(Articles.prototype.setState).toExist;
  });
});

