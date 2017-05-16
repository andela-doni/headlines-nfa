import { EventEmitter } from 'events';
import AppDispatcher from '../utils/AppDispatcher';
import { Actions } from '../utils/AppConstants';
/**
   * Sorts store class
   * @class SourceStore
   * @extends EventEmitter
   */
class SortsStore extends EventEmitter {
  /**
   * Sorts store class
   * @class Sorts
   * @extends EventEmitter
   */
  constructor() {
    super();
    this.articles = [];
    this.source = '';
    this.sortBy = '';
  }
  /**
   * @returns {articles} returns all the sources
   * @memberOf SourceStore
   */
  getAll() {
    return this.articles;
  }
 /**
   * @returns {change} returns all the sources
   * @memberOf SortsStore
   */
  emitChange() {
    this.emit('change');
  }
  /**
   * change listener
   * @param {callback} callback implemented
   * @returns {callback } returns all the articles
   * @memberOf articles
   */
  addChangeListener(callback) {
    this.on('change', callback);
  }
  /**
   * remove change listener
   * @param {callback} callback implemented
   * @returns {callback } returns all the articles
   * @memberOf SortsStore
   */
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
}

const SortStore = new SortsStore();

AppDispatcher.register((payload) => {
  switch (payload.type) {
    case Actions.SORT_ARTICLES:
      if (SortStore.articles.length > 0) SortStore.articles.list = [];
      SortStore.articles = [...payload.response.articles,
        ...SortStore.articles];
      SortStore.source = payload.response.source;
      SortStore.sortBy = payload.response.sortBy;
      SortStore.emitChange();
      break;
    default:
      break;
  }
});

export default SortStore;
