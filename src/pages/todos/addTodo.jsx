/**
 * dependencies
 */

import React from 'react';
import { connect } from 'react-redux';

/**
 * action creators
 */
import { addTodo } from './../../actions/todo';
/**
 * * add todo child component
 */
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
  }

  submit(e) {
    e.preventDefault();
    const form = e.target;
    this.props.addTodo(form.text.value);
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <input type="text" name="text" required />
        <button type="submit">Add</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: text => {
      dispatch(addTodo(text));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);