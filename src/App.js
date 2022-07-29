import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Authentications/Login";
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
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
