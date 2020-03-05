import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = props => {
  console.log("appProps:", props);
  //console.log("props:", props);
  //   console.log("isLoggedIn:", isLoggedIn);
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>This is the home page. Welcome!</h1>
      ) : (
        <div>
          <Button variant="info">
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="info">
            <Link to="/login">Register</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;
