import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function Home() {
    const [fetchedExercises, setFetchedExercises] = useState([]);



    const getExerciseList = async () => {
        let response = await fetch("http://localhost:5000/exercises");
        let data = await response.json();
        setFetchedExercises(data);
        return data;
    }

    useEffect(() => {
        getExerciseList();
    }, []);
    return (
        <div>
            <h1>
                This is the home page. Welcome!
        </h1>

            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Exercise</th>
                        <th>Duration</th>
                    </tr>
                </thead>

                {
                    fetchedExercises.map(exercise => (
                        <tbody key={exercise.id}>
                            <tr>
                                <td>{exercise.username}</td>
                                <td>{exercise.description}</td>
                                <td>{exercise.duration}</td>
                            </tr>
                        </tbody>
                    ))
                }

            </Table>



        </div>
    )
}

export default Home
