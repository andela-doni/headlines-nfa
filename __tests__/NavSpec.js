import React from 'react'
//import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import Nav from '../src/js/components/layout/Nav'

describe('Navigation component with the elements available',() => {
  const wrapper = shallow(<Nav />);
    it('it should render div elements', () => {
      expect(wrapper.find('navbar')).toExist
    })

		it('it should contain a link to the navClass', () => {
      expect(wrapper.find('button')).toExist
    })
		it('it should contain a link to the navClass', () => {
      expect(wrapper.find('a')).toExist
    })
    	it('it should contain a link to the navClass', () => {
      expect(wrapper.find('span')).toExist
    })
    it('it should contain a link to the navClass', () => {
      expect(wrapper.find('icon-bar')).toExist
    })
})

const wrapper = mount(<Nav />);
sinon.spy(Nav.prototype, 'toggleCollapse');
sinon.spy(Nav.prototype, 'logout');
sinon.spy(Nav.prototype, 'render');
sinon.spy(Nav.prototype, 'setState');

describe('if component mounted function exists',() => {
  it(' toggleCollapse exists', () => {
    expect(Nav.prototype.toggleCollapse.calledOnce).toExist;  
  });
   it(' Logout exists', () => {
    expect(Nav.prototype.logout.calledOnce).toExist;  
  });
  it(' render exists', () => {
    expect(Nav.prototype.render.calledOnce).toExist;  
  });
  it(' render exists', () => {
    expect(Nav.prototype.setState.calledOnce).toExist;  
  });
})

