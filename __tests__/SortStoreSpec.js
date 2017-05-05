import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppDispatcher from '../src/js/utils/AppDispatcher';
import { Actions } from '../src/js/utils/AppConstants';
import SortStore from '../src/js/stores/SortStore';
import sinon from 'sinon';

jest.mock('../src/js/utils/AppDispatcher');
jest.dontMock('../src/js/stores/SortStore');
jest.dontMock('object-assign');

describe('SortStore',() => {
  const action = {
    eventType: Actions.SORT_ARTICLES,
        sortBy: [{
            top :'top',
            latest :'latest',
            popular:'popular'
        }]
  };
let onSuccess;

beforeEach(() => {
  onSuccess = AppDispatcher.register.mock.calls [0][0];
})

test('registers onSuccess callback with dispatcher', () => {
  expect(AppDispatcher.register.mock.calls.length).toBe(1);
})

test('The store initializes with no data', () => {
  const allInfo = SortStore.getAll().length;
  expect(allInfo).toBe(0);
})

test('registers tthe right payload', () => {
  onSuccess(action); 
  const allInfo = SortStore.getAll();
  
  console.log(Object.keys,'obj');
  const keys = Object.keys(allInfo);
  expect(keys).toExist;
})
test('check if there is an emit change listener method added', () => {
  expect(SortStore.emitChange).toExist;
})
test('check if there is a change listener method', () => {
  expect(SortStore.addChangeListener).toExist;
})
test('check if there is a remove change listener method', () => {
  expect(SortStore.removeChangeListener).toExist;
})

})

describe('change listener functions', () => {
  let onChange;
  let removeChange; 
 let  onSuccess = (() => {
    return 'news';
  })

  SortStore.addChangeListener(onSuccess)
  SortStore.removeChangeListener(§s)
  SortStore.emitChange()
  expect(SortStore.on).toExist
  expect(SortStore.removeListener).toExist
  expect(SortStore.emit).toExist
})
