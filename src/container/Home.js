import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
//import 'jwt-decode';

function Home() {
    const [fetchedExercises, setFetchedExercises] = useState([]);
    const [token, setToken] = useState("");

    const getUserInfo = () => {
        //setToken(localStorage.getItem('login'));
        console.log("local storage from HOME:", localStorage.getItem('login'));
    }

    const getExerciseList = async () => {
        let response = await fetch(`http://localhost:5000/users/5e1b2984ea76a82da04f2d53`);


        let data = await response.json();
        setFetchedExercises(data);
        console.log("data", data);
        return data;
    }

    useEffect(() => {
        getUserInfo();
        getExerciseList();
    }, []);

    let myToken = localStorage.getItem('login');
    let myObjectToken = JSON.parse(myToken);
    console.log("my object token:", myObjectToken.token);
    //setToken(myObjectToken.token);
    //let userIdFromToken = jwt_decode(token);
    //console.log("token from local storage", token.getItem('token'));

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
