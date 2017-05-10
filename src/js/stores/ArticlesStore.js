import { EventEmitter } from 'events';
import AppDispatcher from '../utils/AppDispatcher';
import { Actions } from '../utils/AppConstants';
/**
   * Articles store class
   * @class ArticlesStore
   * @extends EventEmitter
   */
class ArticleStore extends EventEmitter {
  /**
   * Source store class
   * @class ArticlesStore
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
   * @memberOf SourceStore
   */
  emitChange() {
    this.emit('change');
  }
  /**
   * change listener
   * @params callback function implemented
   * @returns {function} returns all the sources
   * @memberOf SourceStore
   */
  addChangeListener(callback) {
    this.on('change', callback);
  }
  /**
   * remove change listener
   * @params {callback} function implemented
   * @returns {callback } returns all the sources
   * @memberOf ArticlesStore
   */
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
}
const ArticlesStore = new ArticleStore();
AppDispatcher.register((payload) => {
  switch (payload.type) {
    case Actions.GET_ARTICLES:
      if (ArticlesStore.articles.length > 0) ArticlesStore.articles.list = [];
      ArticlesStore.articles = [...payload.response.articles, ...ArticlesStore.articles];
      ArticlesStore.source = payload.response.source;
      ArticlesStore.sortBy = payload.response.sortBy;
      ArticlesStore.emitChange();
      break;
    default:
      break;
  }
});

export default ArticlesStore;

