import { sortsCallback } from '../src/js/actions/SortActions';
// helper function for tests
const stubRequest = {
  set() { return this; },
  query() { return this; },
  end(a, b) { sortsCallback(a, b); },
};
export default stubRequest;
