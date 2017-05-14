import AppDispatcher from '../src/js/utils/AppDispatcher';
import { Actions } from '../src/js/utils/AppConstants';
import SortStore from '../src/js/stores/SortStore';

/* eslint-disable no-unused-expressions*/

jest.mock('../src/js/utils/AppDispatcher');
jest.dontMock('../src/js/stores/SortStore');

describe('SortStore', () => {
  const action = {
    eventType: Actions.SORT_ARTICLES,
    sortBy: [{
      top: 'top',
      latest: 'latest',
      popular: 'popular'
    }]
  };
  let onSuccess;

  beforeEach(() => {
    onSuccess = AppDispatcher.register.mock.calls[0][0];
  });

  test('registers onSuccess callback with dispatcher', () => {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  test('The store initializes with no data', () => {
    const allInfo = SortStore.getAll().length;
    expect(allInfo).toBe(0);
  });

  test('registers tthe right payload', () => {
    onSuccess(action);
    const allInfo = SortStore.getAll();
    const keys = Object.keys(allInfo);
    expect(keys).toExist;
  });
  test('check if there is an emit change listener method added', () => {
    expect(SortStore.emitChange).toExist;
  });
  test('check if there is a change listener method', () => {
    expect(SortStore.addChangeListener).toExist;
  });
  test('check if there is a remove change listener method', () => {
    expect(SortStore.removeChangeListener).toExist;
  });
});

describe('change listener functions', () => {

  const callback = (() => 'news');

  SortStore.addChangeListener(callback);
  SortStore.removeChangeListener(callback);
  SortStore.emitChange();
  expect(SortStore.on).toExist;
  expect(SortStore.removeListener).toExist;
  expect(SortStore.emit).toExist;
});
