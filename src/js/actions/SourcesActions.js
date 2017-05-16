import request from 'superagent';
import { Actions } from '../utils/AppConstants';
import AppDispatcher from '../utils/AppDispatcher';
/**
 * @param {err} err payload
 * @param {response} response payload
 * @returns {error}  err if the api call is not available.
 */
export const sourcesCallback = (err, response) => {
  if (err) return;
  const result = JSON.parse(response.text);
  AppDispatcher.dispatch({
    type: Actions.GET_SOURCES,
    query: result.sources,
  });
};
/**
 * Gets the cookie info and dispatches the LOGIN action
 * Stores user information, User and converts into an object.
 * @returns {sourcesCallback}.
 */
export function getSources() {
  request.get('https://newsapi.org/v1/sources')
    .set('Accept', 'application/json')
    .end(sourcesCallback);
}

