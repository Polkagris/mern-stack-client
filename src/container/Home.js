import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import jwt from 'jsonwebtoken';
import axios from 'axios';
//import 'jwt-decode';

function Home() {
    const [fetchedExercises, setFetchedExercises] = useState([]);
    const [token, setToken] = useState("");

    const getUserInfo = () => {
        //setToken(localStorage.getItem('login'));
        console.log("local storage from HOME:", localStorage.getItem('token'));
        setToken(localStorage.getItem('token'));
    }

    const getExerciseList = async () => {
        const response = await axios.post(`http://localhost:5000/training/`, { token: token });


        let data = response.data;
        setFetchedExercises(data);
        console.log("data", data);
        return data;
    }

    useEffect(() => {
        getUserInfo();
        getExerciseList();
    }, []);




    /*     let myToken = localStorage.getItem('login');
        let myObjectToken = JSON.parse(myToken);
        console.log("my object token:", myObjectToken.token);
        let decodedToken = jwt.decode(myObjectToken.token);
        console.log("token decoded:", decodedToken); */


    return (
        <div>
            <h1>
                This is the home page. Welcome!
        </h1>

            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Exercise</th>
                    </tr>
                </thead>

                {/* Check for undefined */}
                {fetchedExercises.length < 1 ?
                    <div>Loading...</div>
                    :
                    fetchedExercises.exercises.map(exercise => (
                        <tbody key={exercise._id}>
                            <tr>
                                <td>{exercise.description}</td>
                            </tr>
                        </tbody>
                    ))
                }

            </Table>
        </div>
    )
}

export default Home
