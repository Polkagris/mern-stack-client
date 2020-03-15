import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Cell
} from "recharts";
import { GET_EXERCISES } from "../store/actiontypes";
import callMyExercisesRoute from "../utils/api/callMyExercisesRoute";

function ExerciseGraph() {
  const [fetchedExercises, setFetchedExercises] = useState([]);
  const [token, setToken] = useState("");

  const exercises = useSelector(state => state.exercises);
  const dispatch = useDispatch();

  const getUserInfo = async () => {
    const testToken = localStorage.getItem("token");
    setToken(testToken);
  };

  const getExerciseList = async () => {
    if (token === "") return;
    const response = await callMyExercisesRoute(token);
    setFetchedExercises(response.data.exercises);
    console.log("Exerciselist from GRAPH:", response.data.exercises);
    dispatch({
      type: GET_EXERCISES,
      payload: { exercises: [response.data] }
    });
    return response.data;
  };

  function formatXAxis(tickItem) {
    console.log("tickItem in formatX in Graph:", moment(tickItem));
    return moment(tickItem).format("dd/MM/yy");
  }

  useEffect(() => {
    getUserInfo();
    getExerciseList();
  }, [token]);

  return (
    <BarChart
      width={1000}
      height={400}
      data={fetchedExercises}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" tickFormatter={formatXAxis} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="duration" fill="#8884d8" />
    </BarChart>
  );
}

export default ExerciseGraph;
