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
      <li style={{ textDecoration: this.props.todo.completed ? 'line-through' : 'none' }}
        onClick={this.props.onClick.bind(this)}>
        {this.props.todo.text}
      </li>
    )
  }
}