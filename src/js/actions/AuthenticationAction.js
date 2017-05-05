import Cookies from 'js-cookie';
import { Actions } from '../utils/AppConstants';
import AppDispatcher from '../utils/AppDispatcher';
/**
 * Gets the cookie info and dispatches the LOGIN action
 * Stores user information, stringUser and converts into an object.
 * @returns {nothing}.
 */
export function isLoggin() {
  const stringUser = Cookies.get('debprojdb') || false; // false so that undefined is not passed to JSON.parse
  const user = JSON.parse(stringUser);
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
    // history.pushState();
  AppDispatcher.dispatch({
    type: Actions.LOGOUT
  });
}
