import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppDispatcher from '../src/js/utils/AppDispatcher';
import { Actions } from '../src/js/utils/AppConstants';
import AuthenticationStore from '../src/js/stores/AuthenticationStore';
import sinon from 'sinon';

/*eslint-disable no-unused-expressions*/

jest.mock('../src/js/utils/AppDispatcher');
jest.dontMock('../src/js/stores/AuthenticationStore');
jest.dontMock('object-assign');

describe('AuthenticationStore',() => {
  const action = {
    eventType: Actions.LOGIN,
    news: [{
      name:'Debs',
      email:'debs@gm.com'
    },{
      title:'Lol',
      description:'lol@lmao.com'
    }] 
  };
let callback;

beforeEach(() => {
  callback = AppDispatcher.register.mock.calls [0][0];
})

test('registers callback with dispatcher', () => {
  expect(AppDispatcher.register.mock.calls.length).toBe(1);
})

test('check if there is an emit change listener method added', () => {
  expect(AuthenticationStore.emitChange).toExist;
})
test('check if there is a change listener method', () => {
  expect(AuthenticationStore.addChangeListener).toExist;
})
test('check if there is a remove change listener method', () => {
  expect(AuthenticationStore.removeChangeListener).toExist;
})

})

describe('change listener functions', () => {
  let onChange;
  let removeChange; 
 let  callback = (() => {
    return 'news';
  })

  AuthenticationStore.addChangeListener(callback)
  AuthenticationStore.removeChangeListener(callback)
  AuthenticationStore.emitChange()
  expect(AuthenticationStore.on).toExist
  expect(AuthenticationStore.removeListener).toExist
  expect(AuthenticationStore.emit).toExist
})
