import Cookies from 'js-cookie';
import { Actions } from '../utils/AppConstants';
import AppDispatcher from '../utils/AppDispatcher';
/**
 * Gets the cookie info and dispatches the LOGIN action
 * Stores user information, userInfo and converts into an object.
 * @returns {nothing}.
 */
export function isLoggin() {
  const userInfo = Cookies.get('debprojdb') || false;
  const user = JSON.parse(userInfo);
  AppDispatcher.dispatch({
    type: Actions.LOGIN,
    user
  });
}
/**
 * Clears user information after the user has logged out.
 * Dispatches the logout action
 * @returns {nothing}.
 */
export function logout() {
  Cookies.remove('debprojdb');
  AppDispatcher.dispatch({
    type: Actions.LOGOUT
  });
}
