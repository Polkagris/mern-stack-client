import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useGetExercises from "../utils/hooks/useGetExercises";

function MyExercises(props) {
  const fetchedExercisesFromHook = useGetExercises();
  const [token, setToken] = useState("");

  const getUserInfo = async () => {
    const testToken = localStorage.getItem("token");
    setToken(testToken);
  };

  useEffect(() => {
    getUserInfo();
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
            {fetchedExercisesFromHook.length < 1 ? (
              <p>Loading...</p>
            ) : (
              fetchedExercisesFromHook.exercises.map(exercise => (
                <tbody key={exercise._id}>
                  <tr>
                    <td>{exercise.description}</td>
                  </tr>
                  <tr>
                    <td>{exercise.duration}</td>
                  </tr>
                  <tr>
                    <td>{exercise.date}</td>
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
