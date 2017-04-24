import AppDispatcher from '../utils/AppDispatcher';
import { Actions } from '../utils/AppConstants';
import { EventEmitter } from 'events';
import assign from 'object-assign';
const CHANGE = 'change';

const AuthenticationStore = assign({}, EventEmitter.prototype, {

  user: {
      isAuthenticated : false
  },
  getUser(){
        return this.user
    },
  emitChange: function(){
        this.emit(CHANGE);
    },

  addChangeListener: function(callback){
        this.on(CHANGE, callback)
    },
  removeChangeListener: function(callback){
        this.removeListener(CHANGE, callback)
    }
});

AppDispatcher.register(function(payload) {
    switch(payload.type){
        case Actions.LOGIN:
          AuthenticationStore.user = {
              ...payload.user,
              isAuthenticated: payload.user ? true : false
          }
          AuthenticationStore.emitChange();
          break;

        case Actions.LOGOUT:

        AuthenticationStore.user={
            isAuthenticated: false
        }
        AuthenticationStore.emitChange();
        break;
    }
    return true;
})

export default AuthenticationStore;