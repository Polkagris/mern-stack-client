import { CREATE_EXERCISE } from "./actiontypes";

const initalState = {
  exercises: [
    // {
    //   payload: { description: "test", duration: "test", date: new Date() }
    // }
  ]
};

function rootReducer(state = initalState, action) {
  if (action.type === CREATE_EXERCISE) {
    return Object.assign({}, state, {
      exercises: state.exercises.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
