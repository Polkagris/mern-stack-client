import CREATE_EXERCISES from "./actiontypes";

export function getExercises(payload) {
  return { type: CREATE_EXERCISES, payload };
}
