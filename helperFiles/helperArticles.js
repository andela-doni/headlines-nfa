import { articlesCallback } from '../src/js/actions/ArticlesActions';
// helper function for tests
const stubRequest = {
  set() { return this; },
  query() { return this; },
  end(a, b) { articlesCallback(a, b); },
};
export default stubRequest;
