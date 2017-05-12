import request from 'superagent';
import { Actions } from '../utils/AppConstants';
import AppDispatcher from '../utils/AppDispatcher';
// const APIKEY='213327409d384371851777e7c7f78dfe';
// const apiKey = process.env.APIKEY;
/**
 * Api call for sources.
 * @param {source}  sorts by sources.
 * @param {sortBy} sorts by latest, top and popula.
 * Dispatches GET_ARTICLES actions
 * @returns {console.error} if the api call is not available.
 */
const url = 'https://newsapi.org/v1/articles';
const API = '213327409d384371851777e7c7f78dfe';

export const articlesCallback = (err, response) => {
  if (err) return console.error(err);
  const result = JSON.parse(response.text);
  AppDispatcher.dispatch({
    type: Actions.GET_ARTICLES,
    response: result,
  });
};
/**
 * Gets the cookie info and dispatches the LOGIN action
 * @argument {sortBy,source}.
 * @returns {nothing}.
 */
export function getArticles(source, sortBy) {
  request.get(url)
  .set('api', API)
  .query({ source })
  .query({ sortBy })
  .query({ apiKey: API })
  .end(articlesCallback);
}
