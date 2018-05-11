/**
 * actions
 */
import { RECIEVE_TWEETS, FETCH_TWEETS_START, FETCH_TWEETS_ERROR } from './../actions/tweets';
/**
 * initial state
 */

const initialState = {
  data: [],
  isFetched: false,
  fetching: false,
  error: null
}

const tweets = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_TWEETS:
      return Object.assign({}, state, { fetching: false, isFetched: true,  data: action.tweets });
    case FETCH_TWEETS_START:
      return Object.assign({}, state, { fetching: true });
    case FETCH_TWEETS_ERROR:
      return Object.assign({}, state, { fetching: false, error: action.error });
    default:
      return state;
  }
}
export default { tweets };