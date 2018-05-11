/**
 * React
 */
import React from 'react';
import { connect } from 'react-redux';

/**
 * actions
 */

import { fetchTweets } from './../../actions/tweets';

/**
 * children
 */
import Tweets from './list';

/**
 * container
 */
const mapStateToProps = (state) => {
  return {
    tweets: state.tweets.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTweets: () => dispatch(fetchTweets())
  }
}
const tweets = connect(mapStateToProps, mapDispatchToProps)(Tweets);
export default tweets;