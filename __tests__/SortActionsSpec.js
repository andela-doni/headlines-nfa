import expect from 'expect';
import sinon from 'sinon';
import request from 'superagent';
import { getSorts, sortsCallback } from '../src/js/actions/SortActions';
import AppDispatcher from '../src/js/utils/AppDispatcher';
import { Actions } from '../src/js/utils/AppConstants';

describe('getSorts()', () => {
  let sorts;

  beforeEach(() => {
    sorts = sinon.spy();
    const stubRequest = {
       set: function() {return this},
       query: function() {return this},
       end: function(a, b) { sortsCallback(a, b) },
    };
    sinon.stub(request, 'get').returns(stubRequest);
    sorts = sinon.stub(stubRequest, 'end');
  });

  afterEach(() => {
    sortsCallback.restore();
  })
  
  it('calls the success callback', () => {
    getSorts();
    expect(sorts.callCount).toEqual(1);
  })
})

describe('sortsCallback()', () => {
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
    sortsCallback(null, {text});
    expect(dispatcher.callCount).toEqual(1);
    expect(dispatcher.firstCall.args).toEqual([{
      type: Actions.SORT_ARTICLES,
      response
    }])
  })
})