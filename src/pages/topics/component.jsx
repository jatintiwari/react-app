/**
 * React
 */
import React from 'react';

/**
 * React Router
 */
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';

/**
 * dependencies
 */

import Topic from './topic';

export default class Topics extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>
              Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>
              Components
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${this.props.match.path}/:topicId`} component={Topic} />
          <Route exact path={this.props.match.path} render={() => (
            <h3>Please select a topic.</h3>
          )} />
        </Switch>
      </div>
    )
  }
}