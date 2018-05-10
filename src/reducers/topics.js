// const initialState = {
//   visibilityFilter: VisibilityFilters.SHOW_ALL,
//   topics: []
// }


// const topicsApp = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter
//       })
//     case ADD_TOPIC:
//       return Object.assign({}, state, {
//         topics: topics(state.topics, action)
//       })
//     case TOGGLE_TOPIC:
//       return Object.assign({}, state, {
//         topics: state.topics.map(topic => {
//          if (topic.index === action.index) {
//            return Object.assign({}, topic, { completed: !topic.completed });
//          }
//          return topic;
//        })
//       })
//     default:
//       return state;
//   }
// }


// export default (state = {}, action) => {
//   return {
//     visibilityFilter,
//     topics
//   }
// }

import * as Topic from './../actions/topic';

const { 
  ADD_TOPIC,
  TOGGLE_TOPIC,
  SET_VISIBILITY_FILTER } = Topic;

const { SHOW_ALL } = Topic.VisibilityFilters;

/**
 ** Code splitting to combine respective state reducers
 * it is not required to know the complete initial state anymore. 
 * Each child reducer manages its own part of global state.
 */

/**
 ** [CHILD] Topics Reducer
 * Topics reducers also takes in a state as an array.
 * TopicsApp gives Topics reducers an slice of a state to manage and topics know how to manage it.
 * 
 * This is mainly known as reducers composition.
 * 
 */

const topics = (state = [], action) => {
  switch (action.type) {
    case ADD_TOPIC:
      return [
        ...state,
        {
          topic: action.topic,
          completed: false
        }
      ]
    case TOGGLE_TOPIC:
      return state.map((topic, index) => {
        if (index === action.index) {
          return Object.assign({}, topic, { completed: !topic.completed });
        }
        return topic;
      })
    default:
      return state;
  }
}

/**
 ** [CHILD] Visibility reducer
 */
const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default {
  visibilityFilter,
  topics
};