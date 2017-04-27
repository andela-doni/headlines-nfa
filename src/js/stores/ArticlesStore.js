import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppDispatcher from '../utils/AppDispatcher';
import { Actions } from '../utils/AppConstants';

const CHANGE_EVENT = 'change';

const ArticlesStore = assign({}, EventEmitter.prototype, {
  // Initializing articles, sources and sortby
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
  console.log('payload res', payload.response);
  switch (payload.type) {
    case Actions.GET_ARTICLES:
      if (ArticlesStore.articles.length > 0) ArticlesStore.articles.list = [];
      ArticlesStore.articles = [...payload.response.articles, ...ArticlesStore.articles];
      ArticlesStore.source = payload.response.source;
      ArticlesStore.sortBy = payload.response.sortBy;
      ArticlesStore.emitChange();
      break;
  }
});

export default ArticlesStore;

