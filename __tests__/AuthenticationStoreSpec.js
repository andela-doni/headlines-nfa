
import AppDispatcher from '../src/js/utils/AppDispatcher';
import AuthenticationStore from '../src/js/stores/AuthenticationStore';
/* eslint-disable no-unused-expressions*/

jest.mock('../src/js/utils/AppDispatcher');
jest.dontMock('../src/js/stores/AuthenticationStore');
jest.dontMock('object-assign');

describe('AuthenticationStore', () => {
  beforeEach(() => {
  });

  test('registers callback with dispatcher', () => {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  test('check if there is an emit change listener method added', () => {
    expect(AuthenticationStore.emitChange).toExist;
  });
  test('check if there is a change listener method', () => {
    expect(AuthenticationStore.addChangeListener).toExist;
  });
  test('check if there is a remove change listener method', () => {
    expect(AuthenticationStore.removeChangeListener).toExist;
  });
});

describe('change listener functions', () => {
  const callback = (() => 'news');
  AuthenticationStore.addChangeListener(callback);
  AuthenticationStore.removeChangeListener(callback);
  AuthenticationStore.emitChange();
  expect(AuthenticationStore.on).toExist;
  expect(AuthenticationStore.removeListener).toExist;
  expect(AuthenticationStore.emit).toExist;
});
