import AppDispatcher from '../src/js/utils/AppDispatcher';
import { Actions } from '../src/js/utils/AppConstants';
import ArticlesStore from '../src/js/stores/ArticlesStore';
/* eslint-disable no-unused-expressions*/
jest.mock('../src/js/utils/AppDispatcher');
jest.dontMock('../src/js/stores/ArticlesStore');
jest.dontMock('object-assign');

describe('ArticlesStore', () => {
  const action = {
    eventType: Actions.GET_ARTICLES,
    news: [{
      title: 'Welcome',
      description: 'Welcome to live news'
    }, {
      title: 'Hello',
      description: 'Hello how are you'
    }]
  };
  let onSuccess;

  beforeEach(() => {
    onSuccess = AppDispatcher.register.mock.calls[0][0];
  });

  test('registers onSuccess with dispatcher', () => {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  test('The store initializes with no data', () => {
    const allInfo = ArticlesStore.getAll().length;
    expect(allInfo).toBe(0);
  });

  test('registers tthe right payload', () => {
    onSuccess(action);
    const allInfo = ArticlesStore.getAll();
    const keys = Object.keys(allInfo);
    expect(keys).toExist;
  });
  test('check if there is an emit change listener method added', () => {
    expect(ArticlesStore.emitChange).toExist;
  });
  test('check if there is a change listener method', () => {
    expect(ArticlesStore.addChangeListener).toExist;
  });
  test('check if there is a remove change listener method', () => {
    expect(ArticlesStore.removeChangeListener).toExist;
  });
});

describe('change listener functions', () => {
  const onChange
  const removeChange;
  const callback = (() => 'news');

  ArticlesStore.addChangeListener(callback);
  ArticlesStore.removeChangeListener(callback);
  ArticlesStore.emitChange();
  expect(ArticlesStore.on).toExist;
  expect(ArticlesStore.removeListener).toExist;
  expect(ArticlesStore.emit).toExist;
});
