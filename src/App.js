import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Authentications/Register";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
