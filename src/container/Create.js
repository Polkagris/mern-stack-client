import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { CREATE_EXERCISE } from "../store/actiontypes";

function CreateExercise(props) {
  const [description, setDescription] = useState("");
  const [token, setToken] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  const getUserInfo = async () => {
    const testToken = localStorage.getItem("token");
    setToken(testToken);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:5000/users/exercise/`,
        {
          token: token,
          description: description,
          duration: duration,
          date: date
        },
        {
          headers: {
            Authorization: token
          }
        }
      );
      const data = await response.data;
      console.log("Data from create exercise:", data);
      dispatch({
        type: CREATE_EXERCISE,
        payload: { description: description, duration: duration, date: date }
      });
    } catch (err) {
      console.log("Error posting:", err);
    }
    props.history.push("/");
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  useEffect(() => {
    getUserInfo();
  }, [token]);

  return (
    <div>
      {token ? (
        <div>
          <h1>
            This is the page where you create a new exercise. Just saying...
          </h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Exercise description</Form.Label>
              <Form.Control
                onChange={handleDescriptionChange}
                placeholder="description"
                type="text"
                value={description}
              />
              <Form.Label>Exercise duration</Form.Label>
              <Form.Control
                onChange={event => setDuration(event.target.value)}
                placeholder="duration"
                type="number"
                value={duration}
              />
            </Form.Group>
            <Form.Label>Exercise duration</Form.Label>
            <DatePicker
              dateFormat="dd/MM/yy"
              selected={date}
              onChange={selectedDate => setDate(selectedDate)}
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary"
            ></input>
          </Form>
        </div>
      ) : (
        <div>
          <h1>You need to be logged in to create exercises</h1>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      )}
    </div>
  );
}

export default CreateExercise;
