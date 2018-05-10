/**
 * dependencies
 */

import React from 'react';

/**
 * * todo child component
 */
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li onClick={this.props.onClick.bind(this)}>{this.props.text}</li>
    )
  }
}