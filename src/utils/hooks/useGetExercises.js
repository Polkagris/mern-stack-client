import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import callMyExercisesRoute from "../../utils/api/callMyExercisesRoute";
import { GET_EXERCISES } from "../../store/actiontypes";

function useGetExercises() {
  const [fetchedExercises, setFetchedExercises] = useState([]);
  const [token, setToken] = useState("");

  const dispatch = useDispatch();

  const getUserInfo = async () => {
    const testToken = localStorage.getItem("token");
    setToken(testToken);
  };

  const getExerciseList = async () => {
    if (token === "") return;
    const response = await callMyExercisesRoute(token);
    setFetchedExercises(response.data);
    //console.log("Exerciselist from myExercises:", response.data);
    dispatch({
      type: GET_EXERCISES,
      payload: { exercises: [response.data] }
    });
    return response.data;
  };

  // This runs twice, one time at render,
  // second time when token is updated.
  useEffect(() => {
    getUserInfo();
    getExerciseList();
  }, [token]);

  return fetchedExercises;
}

export default useGetExercises;
