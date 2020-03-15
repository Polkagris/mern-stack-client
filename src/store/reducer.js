import { CREATE_EXERCISE, GET_EXERCISES } from "./actiontypes";

const initalState = {
  exercises: [
    // {
    //   payload: { description: "test", duration: "test", date: new Date() }
    // }
  ]
};

function rootReducer(state = initalState, action) {
  /* if (action.type === CREATE_EXERCISE) {
    return Object.assign({}, state, {
      exercises: state.exercises.concat(action.payload)
    });
  }
  return state; */
  switch (action.type) {
    case CREATE_EXERCISE:
      return Object.assign({}, state, {
        exercises: state.exercises.concat(action.payload)
      });
    case GET_EXERCISES:
      return Object.assign({}, state, {
        ...state,
        exercises: state.exercises.concat(action.payload)
      });
    default:
      return state;
  }
}

export default rootReducer;
