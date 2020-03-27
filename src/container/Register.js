import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };
  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const registerUser = async event => {
    event.preventDefault();
    try {
      const user = await fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        })
      });
      const newUser = await user.json();
      console.log(newUser);
    } catch (err) {
      console.log("Error posting:", err);
    }
    props.history.push("/login");
  };

  return (
    <div style={css.wrapper}>
      <h1>Register</h1>
      <Form>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={handleUsernameChange}
            value={username}
          />
        </Form.Group>
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
        <Button variant="primary" type="submit" onClick={registerUser}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register;

const css = {
  wrapper: {
    display: "flex",
    justfifyContent: "center",
    width: "500px",
    margin: "0 auto"
  }
};
