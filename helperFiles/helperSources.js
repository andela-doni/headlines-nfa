import { sourcesCallback } from '../src/js/actions/SourcesActions';
// helper function for tests
const stubRequest = {
  set() { return this; },
  query() { return this; },
  end(a, b) { sourcesCallback(a, b); }
};
export default stubRequest;
