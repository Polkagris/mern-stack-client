import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import jwt from "jsonwebtoken";
import axios from "axios";
//import 'jwt-decode';

function MyExercises() {
  const [fetchedExercises, setFetchedExercises] = useState([]);
  const [token, setToken] = useState("");

  const getUserInfo = async () => {
    const testToken = localStorage.getItem("token");
    setToken(testToken);
  };

  const getExerciseList = async () => {
    if (token === "") return;
    const response = await axios.post(
      `http://localhost:5000/training/`,
      { token: token },
      {
        headers: {
          Authorization: token
        }
      }
    );
    const data = response.data;
    setFetchedExercises(data);
    return data;
  };

  // This runs twice, one time at render,
  // second time when token is updated.
  useEffect(() => {
    getUserInfo();
    getExerciseList();
  }, [token]);

  return (
    <div>
      <h1>This is the home page. Welcome!</h1>

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
  );
}

export default MyExercises;
