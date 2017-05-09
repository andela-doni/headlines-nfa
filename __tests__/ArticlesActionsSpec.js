import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { getArticles, articlesCallback } from '../src/js/actions/ArticlesActions';
import AppDispatcher from '../src/js/utils/AppDispatcher';
import { Actions } from '../src/js/utils/AppConstants.js';
import request from 'superagent';
const API = process.env.APIKEY;

describe('getArticles()', () => {
  let articlesCallback;

  beforeEach(() => {
    articlesCallback = sinon.spy();
    let stubRequest = {
       set: function() {return this},
       query: function() {return this},
       end: function(a, b) { articlesCallback(a, b) },
    };
    sinon.stub(request, 'get').returns(stubRequest);
    articlesCallback = sinon.stub(stubRequest, 'end');
  });

  afterEach(() => {
    articlesCallback.restore();
  })
  
  it('calls the success callback', () => {
    getArticles();
    expect(articlesCallback.callCount).toEqual(1);
  })
})

describe('articlesCallback()', () => {
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
    articlesCallback(null, {text});
    expect(dispatcher.callCount).toEqual(1);
    expect(dispatcher.firstCall.args).toEqual([{
      type: Actions.GET_ARTICLES,
      response
    }])
  })
})