import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { getSources, sourcesCallback } from '../src/js/actions/SourcesActions';
import AppDispatcher from '../src/js/utils/AppDispatcher';
import { Actions } from '../src/js/utils/AppConstants.js';
import request from 'superagent';

describe('getSources()', () => {
  let sourcesCallback;

  beforeEach(() => {
    sourcesCallback = sinon.spy();
    let stubRequest = {
       set: function() {return this},
       query: function() {return this},
       end: function(a, b) { sourcesCallback(a, b) },
    };
    sinon.stub(request, 'get').returns(stubRequest);
    sourcesCallback = sinon.stub(stubRequest, 'end');
  });

  afterEach(() => {
    sourcesCallback.restore();
  })
  
  it('calls the success callback', () => {
    getSources();
    expect(sourcesCallback.callCount).toEqual(1);
  })
})

describe('sourcesCallback()', () => {
  let dispatcher;

  beforeEach(() => {
    dispatcher = sinon.spy(AppDispatcher, 'dispatch');
  })

  afterEach(() => {
    dispatcher.restore();
  })

  it('should call the dispatcher with response data', () => {
    let text = JSON.stringify({"data": "mock"});
    let response = JSON.parse(text);
    sourcesCallback(null, {text});
    expect(dispatcher.callCount).toEqual(1);
  })
})