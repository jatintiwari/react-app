/**
 * React
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

/**
 * react router
 */

import { HashRouter as Router } from 'react-router-dom';

/**
 * dependencies
 */
import Layout from "./components/layout";

/**
 * Dummy inputs
 */
import { addTodo, toggleTodo } from './actions/todo';
store.dispatch(addTodo('Todo 1'));
store.dispatch(addTodo('Todo 2'));
store.dispatch(addTodo('Todo 3'));
store.dispatch(addTodo('Todo 4'));

const app = document.getElementById('app');
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Layout />
    </Provider>
  </Router>, app);