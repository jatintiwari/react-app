/**
 * React
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * React Router
 */
import { Link } from 'react-router-dom';

/**
 * component
 */
export default class Layout extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
    )
  }
}