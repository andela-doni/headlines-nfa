import request from 'superagent';
import { Actions } from '../utils/AppConstants';
import AppDispatcher from '../utils/AppDispatcher';

export function getSources() {
  request.get('https://newsapi.org/v1/sources')
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err) return console.error(err);
      const result = JSON.parse(response.text);
      AppDispatcher.dispatch({
        type: Actions.GET_SOURCES,
        query: result.sources,

      });
    });
}




