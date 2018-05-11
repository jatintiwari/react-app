/**
 * dependencies
 */

import React from 'react';
/**
 * children
 */

/**
 * * tweets list container
 */
export default class TweetsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchTweets()
    // setInterval(this.props.fetchTweets, 2000);
  }

  render() {
    return (
      <div>
        <h4>Tweets List</h4>
        <ul>{
          Array.isArray(this.props.tweets) && this.props.tweets.map((tweet, index) => <li key={index}>{tweet.text}</li>)
        }</ul>
      </div>

    )
  }
}