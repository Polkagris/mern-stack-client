import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise(props) {
    const [userName, setUserName] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [exerciseDate, setExerciseDate] = useState(new Date());

    const handleSubmit = async (event) => {
        event.preventDefault();
        // take input and put in fetch
        const Exercise = {
            username: userName,
            description: description,
            duration: Number(duration),
            date: exerciseDate
        }

        try {
            const newExercise = await fetch("http://localhost:5000/exercises/add", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: userName,
                    description: description,
                    duration: Number(duration),
                    date: exerciseDate
                })
            });
            const content = await newExercise.json();
            console.log(content);
        } catch (err) {
            console.log("Error posting:", err);
        }

        console.log(Exercise);

    }

    const handleUsernameChange = (event) => {
        console.log(event.target.value);
        setUserName(event.target.value)
    }
    const handleDescriptionChange = (event) => {
        console.log(event.target.value);
        setDescription(event.target.value);
    }
    const handleDurationChange = (event) => {
        console.log(event.target.value);
        setDuration(event.target.value);
    }
    const handleDateChange = (date) => {
        setExerciseDate(date);
    }

    return (
        <div>
            <h1>This is the page where you create a new exercise. Just saying...</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        onChange={handleUsernameChange}
                        type="text"
                        placeholder="username"
                        value={userName} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Exercise description</Form.Label>
                    <Form.Control
                        onChange={handleDescriptionChange}
                        placeholder="description"
                        type="text"
                        value={description} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                        onChange={handleDurationChange}
                        placeholder="duration"
                        type="text"
                        value={duration} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <DatePicker
                        selected={exerciseDate}
                        onChange={handleDateChange}
                    />
                </Form.Group>
                <input type="submit" value="Submit" className="btn btn-primary"></input>
            </Form>
        </div>
    )
}

export default CreateExercise;
