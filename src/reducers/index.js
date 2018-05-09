/**
 * dependencies
 */

import { combineReducers } from 'redux';

/**
 * modules
 */

import topics from './topics';

const reducers = combineReducers(Object.assign({},
  topics
));
export default reducers;
