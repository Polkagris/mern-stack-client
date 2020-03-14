import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/user/login", {
        email: email,
        password: password
      })
      .then(async res => {
        if (res.data.success) {
          console.log("res from fetch:", res);
          await localStorage.setItem("token", res.data.token);
          props.history.push("/my-exercises");
        }
      })
      .catch(error => {
        console.log("error:", error);
      });
  };

  return (
    <div style={css.wrapper}>
      <h1>Login</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="info">
          <Link to="/register">Register</Link>
        </Button>
      </Form>
    </div>
  );
}

export default Login;

const css = {
  wrapper: {
    display: "flex",
    justfifyContent: "center",
    width: "500px",
    margin: "0 auto"
  }
};
