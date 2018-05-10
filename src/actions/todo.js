/**
 * actions
 */
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const VISIBLITY = {
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_ALL: "SHOW_ALL"
}

/**
 * action creators
 */

export const addTodo = (text) => {
  return { type: ADD_TODO, text }
}

export const toggleTodo = (index) => {
  return { type: TOGGLE_TODO, index }
}