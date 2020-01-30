import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

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


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/user/login", {
            email: email,
            password: password
        }
        ).then(res => {
            //setIsLoggedIn(true);
            if (res.data.success) {
                console.log("res from fetch:", res);
                //setToken(res.token);
                localStorage.setItem('token',
                    res.data.token
                );
                props.history.push("/");
            }
        }).catch(error => {
            console.log("error:", error);
        })


        //const userToken = await user.text();


        //setToken(userToken);
        //console.log(userToken);





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
