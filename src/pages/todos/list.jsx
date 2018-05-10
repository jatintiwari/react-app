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
    this.todos = this.props.todos.map((todo, index) => <Todo text={todo.text} key={index} onClick={this.props.onTodoClick.bind(this, index)} />)
  }
  render() {
    return (
      <div>
        <h4>Todo List</h4>
        <AddTodo/>
        <ul>{this.todos}</ul>
      </div>

    )
  }
}