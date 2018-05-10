/**
 * dependencies
 */

import React from 'react';
import { connect } from 'react-redux';
/**
 * Components
 */
import TodoList from './list';
/**
 * action
 */
import { VISIBLITY, toggleTodo } from '../../actions/todo';
/**
 * constants
 */
const { SHOW_COMPLETED, SHOW_ACTIVE, SHOW_ALL } = VISIBLITY;

/**
 * container component for /todo route
 */

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case SHOW_ALL:
    default:
      return todos
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, SHOW_ALL)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  }
}
const Todos = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default Todos;