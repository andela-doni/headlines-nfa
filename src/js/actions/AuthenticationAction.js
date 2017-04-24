import AppDispatcher from '../utils/AppDispatcher';
import {Actions} from '../utils/AppConstants.js';
import Cookies from 'js-cookie';

export function isLoggin(){
    const stringUser = Cookies.get('debprojdb') || false; // false so undefined is not passed to JSON.parse
    const user = JSON.parse(stringUser);
    AppDispatcher.dispatch({
        type:Actions.LOGIN,
        user
    });
}

export function logout(){
    Cookies.remove('debprojdb');
    // history.pushState();
    AppDispatcher.dispatch({
        type: Actions.LOGOUT
    })
}