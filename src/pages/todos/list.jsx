/**
 * dependencies
 */

import React from 'react';
/**
 * children
 */
import Todo from './todo';
import AddTodo from './addTodo';

/**
 * * todo list container
 */
export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    this.todos = this.props.todos.map((todo, index) => <Todo todo={todo} key={index} onClick={this.props.onTodoClick.bind(this, index)} />)
    return (
      <div>
        <h4>Todo List</h4>
        <AddTodo/>
        <ul>{this.todos}</ul>
      </div>

    )
  }
}