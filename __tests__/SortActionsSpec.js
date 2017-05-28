import expect from 'expect';
import sinon from 'sinon';
import request from 'superagent';
import { getSorts, sortsCallback } from '../src/js/actions/SortActions';
import stubRequest from '../helperFiles/helperSorts';
import AppDispatcher from '../src/js/utils/AppDispatcher';
import { Actions } from '../src/js/utils/AppConstants';

describe('getSorts()', () => {
  let sorts;

  beforeEach(() => {
    sorts = sinon.spy();
    sinon.stub(request, 'get').returns(stubRequest);
    sorts = sinon.stub(stubRequest, 'end');
  });

  afterEach(() => {
    sorts.restore();
  });

  it('calls the success callback', () => {
    getSorts();
    expect(sorts.callCount).toEqual(1);
  });
});

describe('sortsCallback()', () => {
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
    sortsCallback(null, { text });
    expect(dispatcher.callCount).toEqual(1);
    expect(dispatcher.firstCall.args).toEqual([{
      type: Actions.SORT_ARTICLES,
      response
    }]);
  });
});
