import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppDispatcher from '../src/js/utils/AppDispatcher';
import { Actions } from '../src/js/utils/AppConstants';
import SourceStore from '../src/js/stores/SourceStore';
import sinon from 'sinon';

jest.mock('../src/js/utils/AppDispatcher');
jest.dontMock('../src/js/stores/SourceStore');
jest.dontMock('object-assign');

describe('SourceStore',() => {
  const action = {
    eventType: Actions.GET_SOURCES,
    news: [{
      title:'Welcome',
      description:'Welcome to live news'
    },{
      title:'Hello',
      description:'Hello how are you'
    }] 
  };
let onSuccess;

beforeEach(() => {
  onSuccess = AppDispatcher.register.mock.calls [0][0];
})

test('registers onSuccess with dispatcher', () => {
  expect(AppDispatcher.register.mock.calls.length).toBe(1);
})

test('The store initializes with no data', () => {
  const allInfo = SourceStore.getAll().length;
  expect(allInfo).toBe(0);
})

test('registers tthe right payload', () => {
  onSuccess(action);
  const allInfo = SourceStore.getAll();
  
  console.log(Object.keys,'obj');
  const keys = Object.keys(allInfo);
  expect(keys).toExist;
})
test('check if there is an emit change listener method added', () => {
  expect(SourceStore.emitChange).toExist;
})
test('check if there is a change listener method', () => {
  expect(SourceStore.addChangeListener).toExist;
})
test('check if there is a remove change listener method', () => {
  expect(SourceStore.removeChangeListener).toExist;
})

})


describe('change listener functions', () => {
  let onChange;
  let removeChange; 
  let  callback = (() => {
    return 'news';
  })

  SourceStore.addChangeListener(callback)
  SourceStore.removeChangeListener(callback)
  SourceStore.emitChange()
  expect(SourceStore.on).toExist
  expect(SourceStore.removeListener).toExist
  expect(SourceStore.emit).toExist
})
