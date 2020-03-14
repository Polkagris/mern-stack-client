import React, { useState } from "react";
import "./App.css";
import Routes from "./Routes";
import NavbarExercise from "./container/NavbarExercise";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <NavbarExercise />
      <Routes isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
