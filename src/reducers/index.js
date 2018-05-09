/**
 * dependencies
 */

import { combineReducers } from 'redux';

/**
 * modules
 */

import topics from './topics';
import todos from './todos';

const reducers = combineReducers(Object.assign({},
  topics,
  todos
));
export default reducers;
