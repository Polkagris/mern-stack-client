import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState("");



    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = await fetch("http://localhost:5000/user/login", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const userToken = await user.text();
            setIsLoggedIn(true);
            setToken(userToken);
            console.log(userToken);

            localStorage.setItem('login', JSON.stringify({
                token: userToken
            }));

        } catch (err) {
            console.log("Error posting:", err);
        }
        props.history.push("/");
    }


    /* 
        useEffect(() => {
            loginUser();
        }, [submitForm]) */



    return (
        <div style={css.wrapper}>
            <h1>Login</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={handleEmailChange}
                        value={email}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        value={password}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
            </Button>
            </Form>
        </div>
    )
}

export default Login

const css = {
    wrapper: {
        display: "flex",
        justfifyContent: "center",
        width: "500px",
        margin: "0 auto"
    }
}
