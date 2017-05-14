import expect from 'expect';
import sinon from 'sinon';
import request from 'superagent';
import { getSources, sourcesCallback } from '../src/js/actions/SourcesActions';
import AppDispatcher from '../src/js/utils/AppDispatcher';
// import { Actions } from '../src/js/utils/AppConstants';

describe('getSources()', () => {
  let sources;

  beforeEach(() => {
    sources = sinon.spy();
    const stubRequest = {
      set() { return this; },
      query() { return this; },
      end(a, b) { sourcesCallback(a, b); }
    };
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
