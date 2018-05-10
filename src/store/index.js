/**
 * dependencies
 */
import { applyMiddleware, createStore } from 'redux';

/**
 * middlewares
 */

 import logger from 'redux-logger';
 import thunk from 'redux-thunk';

/**
 * modules
 */
import reducers from './../reducers';

const store = createStore(reducers, applyMiddleware(thunk, logger));

// const unsubscribe = store.subscribe(() => console.log(store.getState()));

export default store;