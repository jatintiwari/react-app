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

const app = document.getElementById('app');
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Layout />
    </Provider>
  </Router>, app);