import { EventEmitter } from 'events';
import AppDispatcher from '../utils/AppDispatcher';
import { Actions } from '../utils/AppConstants';

/**
 * Initialises methods used to fetch the payload from actions.
 * @function getUser to initialise the user function
 * sets the user authentication status as false at first
 * @function getUser gets the user details from actions
 * @function emit change function emits change
 * when a change has occured in the component
 * @function addChangeListener adds, a function
 * that listens for any change occuring in the components
 * @function removeChangeListener adds, a function
 * that removes the listeners after the component has unrendered.
 */
/**
   * Articles store class
   * @class Authentication
   * @extends EventEmitter
   */
class Authentication extends EventEmitter {
// initiates the user authentication condition as false
  /**
   * Source store class
   * @class Authentication
   * @extends EventEmitter
   */
  constructor() {
    super();
    this.user = {
      isAuthenticated: false
    };
  }
   getUser() {
    return this.user;
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
/**
 * Initialises methods used to fetch the payload from actions.
 * @function AppDispatcher.register , registers  the action on the store, 
 * to emit change regarding the specific action that nedds to be triggered
 * Login gets triggers the users information set in the debprodb cookie
 * Logout clears the users information in the cookie
 */
const AuthenticationStore = new Authentication();
AppDispatcher.register((payload) => {
  switch (payload.type) {
    case Actions.LOGIN:
      AuthenticationStore.user = {
        ...payload.user,
        isAuthenticated: !!payload.user
      };
      AuthenticationStore.emitChange();
      break;

    case Actions.LOGOUT:

      AuthenticationStore.user = {
        isAuthenticated: false
      };
      AuthenticationStore.emitChange();
      break;
    default:
      break;
  }
  return true;
});

export default AuthenticationStore;
