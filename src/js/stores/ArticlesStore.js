import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppDispatcher from '../utils/AppDispatcher';
import { Actions } from '../utils/AppConstants';

const CHANGE_EVENT = 'change';
const ArticlesStore = assign({}, EventEmitter.prototype, {


    // Actual collection of model data
  articles: [],
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
    case Actions.GET_ARTICLES:
      ArticlesStore.articles = payload.query;
      ArticlesStore.emitChange();
      break;
  }
  return true; // Needed for Flux promise resolution
});

export default ArticlesStore;

