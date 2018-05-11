/**
 * action
 */

export const RECIEVE_TWEETS = "RECIEVE_TWEETS";
export const FETCH_TWEETS_START = "FETCH_TWEETS_START";
export const FETCH_TWEETS_ERROR = "FETCH_TWEETS_ERROR";

/**
 * thunk: action creators
 */

export const fetchTweets = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_TWEETS_START });
    fetch("http://localhost:3000/api/tweets")
      .then((response) => {
        if (!response.error) return response.json();
        throw new Error(response.error);
      })
      .then(tweets => dispatch({ type: RECIEVE_TWEETS, tweets }))
      .catch(error => {
        dispatch({ type: FETCH_TWEETS_ERROR, error })
      });
  }
}



