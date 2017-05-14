import request from 'superagent';
import { Actions } from '../utils/AppConstants';
import AppDispatcher from '../utils/AppDispatcher';
/**
 * Api call for sources.
 * requests for news sources from api
 * lists sources according to alphabetical order by default
 * Dispatches GET_SOURCES actions
 * @returns {console.error} if the api call is not available.
 * @argument {err, response}
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
 * Stores user information, stringUser and converts into an object.
 * @returns {sourcesCallback}.
 */
export function getSources() {
  request.get('https://newsapi.org/v1/sources')
    .set('Accept', 'application/json')
    .end(sourcesCallback);
}

