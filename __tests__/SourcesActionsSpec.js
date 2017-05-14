import expect from 'expect';
import sinon from 'sinon';
import request from 'superagent';
import { getSources, sourcesCallback } from '../src/js/actions/SourcesActions';
import stubRequest from '../helperFiles/helperSources';
import AppDispatcher from '../src/js/utils/AppDispatcher';

describe('getSources()', () => {
  let sources;

  beforeEach(() => {
    sources = sinon.spy();
    
    sinon.stub(request, 'get').returns(stubRequest);
    sources = sinon.stub(stubRequest, 'end');
  });

  afterEach(() => {
    sources.restore();
  });
  it('calls the success callback', () => {
    getSources();
    expect(sources.callCount).toEqual(1);
  });
});

describe('sourcesCallback()', () => {
  let dispatcher;

  beforeEach(() => {
    dispatcher = sinon.spy(AppDispatcher, 'dispatch');
  });

  afterEach(() => {
    dispatcher.restore();
  });

  it('should call the dispatcher with response data', () => {
    const text = JSON.stringify({ data: 'mock' });
    // const response = JSON.parse(text);
    sourcesCallback(null, { text });
    expect(dispatcher.callCount).toEqual(1);
  });
});
