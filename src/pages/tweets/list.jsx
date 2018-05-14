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
    this.props.fetchTweets();
    console.log("componentWillMount");
    // setInterval(this.props.fetchTweets, 2000);
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.internval = setInterval(this.props.fetchTweets, 2000);
  }
  
  componentWillReceiveProps(){
    console.log("componentWillReceiveProps");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
    clearInterval(this.internval);
  }
  componentWillUpdate(){
    console.log("componentWillUpdate");
  }
  
  componentDidCatch(error, info) {
    console.log("componentDidCatch");
  }

  render() {
    return (
      <div>
        <h4>Tweets List</h4>
        <ul>{
          this.props.tweets && this.props.tweets.map((tweet, index) => <li key={index}>{tweet.text}</li>)
        }</ul>
        {
          this.props.error ? <div>{this.props.error.stack}</div> : <span></span>
        }
      </div>

    )
  }
}