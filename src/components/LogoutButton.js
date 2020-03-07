import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function LogoutButton() {
  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div>
      <Button variant="info" onClick={handleLogout}>
        <Link to="/login">Logout</Link>
      </Button>
    </div>
  );
}

export default LogoutButton;
