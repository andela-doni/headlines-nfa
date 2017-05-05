import React from 'react';
//import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import Welcome from '../src/js/pages/Welcome';


describe('Welcome Component with news sources',() => {
     const wrapper = shallow(<Welcome />);
    it('it should render div elements', () => {
        expect(wrapper.find('div')).toExist
    })
    it('it should render a h1 element for title', () => {
        expect(wrapper.find('h1')).toExist
    })
     it('it should have an input tag for searching through sources', () => {
        expect(wrapper.find('input')).toExist
    })
     it('the input tag should be okay',() => {
        expect(wrapper.find('input')).tobeok;

     })
});


const wrapper = mount(<Welcome />);
sinon.spy(Welcome.prototype, 'componentDidMount');

describe('if component mounted function exists',() => {
  it(' componentDidMount exists', () => {
    expect(Welcome.prototype.componentDidMount.calledOnce).toExist;  
  });

  it(' componentWillUnMount exists', () => {
    expect(Welcome.prototype.componentWillUnMount.calledOnce).toExist;  
  });


})