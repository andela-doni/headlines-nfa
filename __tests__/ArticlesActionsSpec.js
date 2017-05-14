import request from 'superagent';
import expect from 'expect';
import sinon from 'sinon';
import { getArticles, articlesCallback } from '../src/js/actions/ArticlesActions';
import stubRequest from '../helperFiles/helperArticles';
import { Actions } from '../src/js/utils/AppConstants';
import AppDispatcher from '../src/js/utils/AppDispatcher';


describe('getArticles()', () => {
  let articles;

  beforeEach(() => {
    articles = sinon.spy();
    sinon.stub(request, 'get').returns(stubRequest);
    articles = sinon.stub(stubRequest, 'end');
  });

  afterEach(() => {
    articles.restore();
  });

  it('calls the success callback', () => {
    getArticles();
    expect(articles.callCount).toEqual(1);
  });
});

describe('articlesCallback()', () => {
  let dispatcher;

  beforeEach(() => {
    dispatcher = sinon.spy(AppDispatcher, 'dispatch');
  });

  afterEach(() => {
    dispatcher.restore();
  });

  it('should call the dispatcher with response data', () => {
    const text = JSON.stringify({ data: 'mock' });
    const response = JSON.parse(text);
    articlesCallback(null, { text });
    expect(dispatcher.callCount).toEqual(1);
    expect(dispatcher.firstCall.args).toEqual([{
      type: Actions.GET_ARTICLES,
      response
    }]);
  });
});
