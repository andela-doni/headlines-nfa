import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import Footer from '../src/js/components/layout/Footer';

describe('Elements in the Footer components', () => {
    const wrapper = shallow(<Footer />);
    it('It should contain a div tag', () => {
        expect(wrapper.find('div')).toExist
    })
     it('It should contain a footer tag', () => {
        expect(wrapper.find('footer')).toExist
    })
});