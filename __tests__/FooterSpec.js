import React from 'react'
import { shallow, mount } from 'enzyme'
import Footer from '../src/js/components/layout/Footer'
//jest.dontMock('../src/js/components/layout/Footer')
import test from 'react-test-renderer'

describe('Footer component', () => {
  it('renders p', () => {
    const wrapper = shallow( <Footer /> );
    expect(wrapper.find('p').text()).toEqual('Copyright © Headlines')
  })
  
})

