import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import Articles from '../src/js/pages/Articles';

describe('Articles Component', () => {
    const wrapper = shallow(<Articles />);
    // it('it should render div elements', () => {
    //     expect(wrapper.find('div')).toExist
    // })
});
