import AppDispatcher from '../utils/AppDispatcher.js';
import { Actions, ViewFilters } from '../utils/AppConstants';
import { EventEmitter } from 'events';
import assign from 'object-assign';
const CHANGE_EVENT = 'change';

const SearchStore = assign({}, EventEmitter.prototype, {

    // Actual collection of model data
  sources: [],

    // Accessor method we'll use later
  getAll() {
    return this.sources;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

	/**
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register((payload) => {
  switch (payload.type) {
    case Actions.GET_SOURCES:
    // We get to mutate data!
      SearchStore.sources = payload.query;
    // Tell the world we changed!
    // NewsStore.trigger(CHANGE_EVENT);
      SearchStore.emitChange();
      break;
  }
  return true; // Needed for Flux promise resolution
});

export default SearchStore;

