/**
 * React
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * React Router
 */
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

/**
 * dependencies
 */
import Home from "../pages/home/component";
import About from "../pages/about/component";
import Topics from "../pages/topics/component";
import Todos from "../pages/todos/component";

/**
 * component
 */
export default class Layout extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li><Link to="/todos">Todos</Link></li>
        </ul>
        <hr/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/todos" component={Todos} />
      </div>
    )
  }
}