import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

const Home = props => {
  console.log("appProps:", props);

  const [token, setToken] = useState("");

  const getTokenFromLocalStorage = () => {
    const testToken = localStorage.getItem("token");
    setToken(testToken);
  };

  useEffect(() => {
    getTokenFromLocalStorage();
  }, [token]);

  return (
    <div>
      {token ? (
        <div>
          <h1>This is the home page. Welcome!</h1>
          <LogoutButton />
        </div>
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
