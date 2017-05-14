import request from 'superagent';
import { Actions } from '../utils/AppConstants';
import AppDispatcher from '../utils/AppDispatcher';

const url = 'https://newsapi.org/v1/articles';
const API = '213327409d384371851777e7c7f78dfe';
/**
 * Api call for sorts.
 * Dispatches SORT_ARTICLES actions
 * @returns {console.error} if the api call is not available.
 */
export const sortsCallback = (err, response) => {
  if (err) return;
  const result = JSON.parse(response.text);
  AppDispatcher.dispatch({
    type: Actions.SORT_ARTICLES,
    response: result,
  });
};
/**
 * Api call for sorts.
 * Dispatches SORT_ARTICLES actions
 * @returns {console.error} if the api call is not available.
 */
export function getSorts(sortBy) {
  request.get(url)
    .set('api', API)
    .query({ sortBy })
    .end(sortsCallback);
}
