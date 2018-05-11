/**
 * dependencies
 */

import { combineReducers } from 'redux';

/**
 * modules
 */

import topics from './topics';
import todos from './todos';
import tweets from './tweets';

const reducers = combineReducers(Object.assign({},
  topics,
  todos,
  tweets
));
export default reducers;
