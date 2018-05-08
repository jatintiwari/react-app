/**
 * React
 */
import React from 'react';

export default class Topic extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>{this.props.match.params.topicId}</h3>
      </div>
    )
  }
}