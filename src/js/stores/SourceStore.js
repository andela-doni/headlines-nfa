import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppDispatcher from '../utils/AppDispatcher';
import { Actions } from '../utils/AppConstants';

const CHANGE_EVENT = 'change';
const SourceStore = assign({}, EventEmitter.prototype, {
    // Actual collection of model data
  sources: [],
    // Accessor method we'll use later
  getAll() {
    return this.sources;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },


  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register((payload) => {
  switch (payload.type) {
    case Actions.GET_SOURCES:
      SourceStore.sources = payload.query;
      SourceStore.emitChange();
      break;
  }
  return true; // Needed for Flux promise resolution
});

export default SourceStore;

