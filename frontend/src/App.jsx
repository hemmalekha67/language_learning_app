import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Quiz from "./pages/Quiz";
import Navbar from "./components/Navbar";
import Signup from "./components/functional_components/Signup";
import Login from "./components/functional_components/Login";

import "./App.css";

  const App=()=> {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;