import { EventEmitter } from 'events';
import AppDispatcher from '../utils/AppDispatcher';
import { Actions } from '../utils/AppConstants';
/**
   * Source store class
   * @class SourceStore
   * @extends EventEmitter
   */
class NewsStore extends EventEmitter {
/**
   * Source store class
   * @class SourceStore
   * @extends EventEmitter
   */
  constructor() {
    super();
    this.sources = [];
  }
  /**
   * @returns {sources} returns all the sources
   * @memberOf SourceStore
   */
  getAll() {
    return this.sources;
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
   * @params {callback} function implemented
   * @returns {callback } returns all the sources
   * @memberOf SourceStore
   */
  addChangeListener(callback) {
    this.on('change', callback);
  }
  /**
   * remove change listener
   * @params {callback} function implemented
   * @returns {callback } returns all the sources
   * @memberOf SourceStore
   */
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
}
const SourceStore = new NewsStore();

AppDispatcher.register((payload) => {
  switch (payload.type) {
    case Actions.GET_SOURCES:
      SourceStore.sources = payload.query;
      SourceStore.emitChange();
      break;
    default:
      break;
  }
  return true;
});

export default SourceStore;

