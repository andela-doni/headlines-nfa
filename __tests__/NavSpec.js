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

		it('it should contain a link to the loginClass', () => {
      expect(wrapper.find('button')).toExist
    })
		it('it should contain a link to the ', () => {
      expect(wrapper.find('a')).toExist
    })
})