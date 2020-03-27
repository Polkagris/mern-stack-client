import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useGetExercises from "../utils/hooks/useGetExercises";
import Axios from "axios";
import callMyExercisesRoute from "../utils/api/callMyExercisesRoute";
import { GET_EXERCISES } from "../store/actiontypes";
import { useDispatch } from "react-redux";
import moment from "moment";

function MyExercises(props) {
  // const fetchedExercisesFromHook = getExerciseList();
  const [token, setToken] = useState("");
  const [fetchedExercises, setFetchedExercises] = useState([]);

  const getUserInfo = async () => {
    const testToken = localStorage.getItem("token");
    setToken(testToken);
  };

  const getExerciseList = async () => {
    if (token === "") return;
    const response = await callMyExercisesRoute(token);
    setFetchedExercises(response.data);
    console.log("Exerciselist from myExercises:", response.data);
    // useDispatch({
    //   type: GET_EXERCISES,
    //   payload: { exercises: [response.data] }
    // });
    return response.data;
  };

  const deleteExercise = async exercise => {
    console.log("DELETE exercise:", exercise);

    const response = await Axios.delete(
      `http://localhost:5000/training/delete-exercise`,
      {
        headers: {
          Authorization: token,
          token: token,
          exerciseId: exercise._id
        },
        data: {
          token: token,
          exerciseId: exercise._id
        }
      }
    );
    const newList = await callMyExercisesRoute(token);
    setFetchedExercises(newList.data);
    return response;
  };

  useEffect(() => {
    getUserInfo();
    getExerciseList();
  }, [token]);

  console.log("token from myExercises:", token);
  return (
    <div>
      {!token == "" ? (
        <div>
          <h1>Your exercises:</h1>

          <Table responsive striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Exercise</th>
              </tr>
            </thead>
            {/* Check for undefined */}
            {fetchedExercises.length < 1 ? (
              <p>Loading...</p>
            ) : (
              fetchedExercises.exercises.map((exercise, index) => (
                <tbody key={exercise._id}>
                  <tr>
                    <td>Exercise: {exercise.description}</td>
                  </tr>
                  <tr>
                    <td>Duration: {exercise.duration}</td>
                  </tr>
                  <tr>
                    <td>Date: {moment(exercise.date).format("DD.MM.YY")}</td>
                  </tr>
                  <tr>
                    <Button onClick={() => deleteExercise(exercise)}>
                      Delete
                    </Button>
                  </tr>
                </tbody>
              ))
            )}
          </Table>
        </div>
      ) : (
        <div>
          <h1>You need to be logged in to see exercises</h1>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      )}
    </div>
  );
}

export default MyExercises;
