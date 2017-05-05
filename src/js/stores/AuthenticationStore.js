import assign from 'object-assign';
import { EventEmitter } from 'events';
import AppDispatcher from '../utils/AppDispatcher';
import { Actions } from '../utils/AppConstants';

/**
 * Initialises methods used to fetch the payload from actions.
 * @function getUser to initialise the user function
 * sets the user authentication status as false at first
 * @function getUser gets the user details from actions
 * @function emit change function emits change when a change has occured in the component
 * @function addChangeListener adds, a function that listens for any change occuring in the components
 * @function removeChangeListener adds, a function that removes the listeners after the component has unrendered.
 */

const CHANGE = 'change';
const AuthenticationStore = assign({}, EventEmitter.prototype, {
// initiates the user authentication condition as false
  user: {
    isAuthenticated: false
  },
  getUser() {
    return this.user;
  },
  emitChange() {
    this.emit(CHANGE);
  },

  addChangeListener(callback) {
    this.on(CHANGE, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE, callback);
  }
});
/**
 * Initialises methods used to fetch the payload from actions.
 * @function AppDispatcher.register , registers  the action on the store, 
 * to emit change regarding the specific action that nedds to be triggered
 * Login gets triggers the users information set in the debprodb cookie
 * Logout clears the users information in the cookie
 */

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
      //console.log('fix');
      break;
  }
  return true;
});

export default AuthenticationStore;
