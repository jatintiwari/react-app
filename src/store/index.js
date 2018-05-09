/**
 * dependencies
 */
import { createStore } from 'redux';
// import { addTopic, toggleTopic, setVisibilityFilter, VisibilityFilters } from './../actions/topic';
import { addTodo, toggleTodo } from './../actions/todo';

/**
 * modules
 */
import reducers from './../reducers';

const store = createStore(reducers);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch(addTopic('Learn about actions'))
// store.dispatch(addTopic('Learn about reducers'))
// store.dispatch(addTopic('Learn about store'))
// store.dispatch(toggleTopic(0))
// store.dispatch(toggleTopic(1))
// setInterval(() => {
//   ((max, min) => {
//     const index = Math.floor(Math.random() * (max-min+1))+min;
//     store.dispatch(toggleTopic(index));
//   })(0,3);
// }, 2000);
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

store.dispatch(addTodo('Todo 1'));
store.dispatch(addTodo('Todo 2'));
store.dispatch(addTodo('Todo 3'));
store.dispatch(addTodo('Todo 4'));