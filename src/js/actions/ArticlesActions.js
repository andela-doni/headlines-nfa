import request from 'superagent';
import { Actions } from '../utils/AppConstants';
import AppDispatcher from '../utils/AppDispatcher';

export function getArticles() {
  request.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=213327409d384371851777e7c7f78dfe')
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err) return console.error(err);
      const result = JSON.parse(response.text);
      console.log(result);
      AppDispatcher.dispatch({
        type: Actions.GET_ARTICLES,
        query: result.articles,
      });
    });
}
