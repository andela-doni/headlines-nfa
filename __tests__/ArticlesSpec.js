import React from 'react';
// import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import Articles from '../src/js/components/pages/Articles';

describe('Articles Component', () => {
    const wrapper = mount(<Articles />);
    it('it should render div elements', () => {
        expect(wrapper.find('div')).toExist
    })
    it('it should render an h4 element', () => {
        expect(wrapper.find('h4')).toExist
    })
    it('it should render an a element', () => {
        expect(wrapper.find('a')).toExist
    })
    it('it should render an img element', () => {
        expect(wrapper.find('img')).toExist
    })
    it('it should render  an select element', () => {
        expect(wrapper.find('select')).toExist
    })
});

const wrapper = mount(<Articles />);
sinon.spy(Articles.prototype, 'componentDidMount');

describe('if component mounted function exists',() => {
  it(' componentDidMount exists', () => {
    expect(Articles.prototype.componentDidMount.calledOnce).toExist;  
  });

  it(' componentWillUnMount exists', () => {
    expect(Articles.prototype.componentWillUnMount.calledOnce).toExist;  
  });


})