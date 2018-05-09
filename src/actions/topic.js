/**
 * action types
 */
export const ADD_TOPIC = "ADD_TOPIC";
export const TOGGLE_TOPIC = "TOGGLE_TOPIC";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

/**
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}


/**
 * action creators
 */

export const addTopic = (topic) => {
  return { type: ADD_TOPIC, topic }
}

export const toggleTopic = (index) => {
  return { type: TOGGLE_TOPIC, index }
}

export const setVisibilityFilter = (filter) => {
  return { type: SET_VISIBILITY_FILTER, filter }
}