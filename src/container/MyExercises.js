import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import callMyExercisesRoute from "../utils/api/callMyExercisesRoute";

function MyExercises(props) {
  const [fetchedExercises, setFetchedExercises] = useState([]);
  const [token, setToken] = useState("");

  const getUserInfo = async () => {
    const testToken = localStorage.getItem("token");
    setToken(testToken);
  };

  const getExerciseList = async () => {
    if (token === "") return;
    const response = await callMyExercisesRoute(token);
    setFetchedExercises(response.data);
  };

  // This runs twice, one time at render,
  // second time when token is updated.
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
              <div>Loading...</div>
            ) : (
              fetchedExercises.exercises.map(exercise => (
                <tbody key={exercise._id}>
                  <tr>
                    <td>{exercise.description}</td>
                  </tr>
                  <tr>
                    <td>{exercise.duration}</td>
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
