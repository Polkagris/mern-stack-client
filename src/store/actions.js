import { CREATE_EXERCISE, GET_EXERCISES } from "./actiontypes";

export function createExercise(payload) {
  return { type: CREATE_EXERCISE, payload };
}

export function getAllExercises(payload) {
  return { type: GET_EXERCISES, payload };
}
