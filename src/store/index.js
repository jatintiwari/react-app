/**
 * dependencies
 */
import { createStore } from 'redux';

/**
 * modules
 */
import reducers from './../reducers';

const store = createStore(reducers);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

export default store;