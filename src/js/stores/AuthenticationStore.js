import assign from 'object-assign';
import { EventEmitter } from 'events';
import AppDispatcher from '../utils/AppDispatcher';
import { Actions } from '../utils/AppConstants';

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
