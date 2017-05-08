import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppDispatcher from '../utils/AppDispatcher';
import { Actions } from '../utils/AppConstants';
const CHANGE_EVENT = 'change';
const SortStore = assign({}, EventEmitter.prototype, {
  // Actual collection of model data
  articles: [],
  source: '',
  sortBy: '',

    // Accessor method we'll use later
  getAll() {
    return this.articles;
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
    case Actions.SORT_ARTICLES:
      if (SortStore.articles.length > 0) SortStore.articles.list = [];
      SortStore.articles = [...payload.response.articles, ...SortStore.articles];
      SortStore.source = payload.response.source;
      SortStore.sortBy = payload.response.sortBy;
      SortStore.emitChange();
      break;
  }
});

export default SortStore;
