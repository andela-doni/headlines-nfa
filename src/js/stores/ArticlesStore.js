import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppDispatcher from '../utils/AppDispatcher';
import { Actions } from '../utils/AppConstants';

const CHANGE_EVENT = 'change';
/**
*
 */

export default class ArticleStore extends EventEmitter {
/**
*
 */
  constructor() {
    super();
    this.articles = [];
  }
/**
*
 */
  getAll() {
    return this.articles;
  }
  /**
*
 */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  /**
*
 */
  addChangeListener(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },
  /**
*
 */
  removeChangeListener(callback){
    this.removeChangeListener(CHANGE_EVENT,callback)
  }
}

AppDispatcher.register((payload)=>{
    switch(payload.type){
        case Actions.GET_ARTICLES:
          ArticleStore.articles = payload.query
          ArticleStore.emitChange();
          break;
    }
    return true;
});

