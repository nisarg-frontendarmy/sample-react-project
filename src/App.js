// import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Student from "./Student";
import SingleStudent from "./SingleStudent";
import SingleStudent1 from "./SingleStudent1";
import SingleStudent2 from "./SingleStudent2";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/student" element={<Student />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/singlestudent" element={<SingleStudent />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/singlestudent1" element={<SingleStudent1 />} />
        <Route path="/singleStudent2" element={<SingleStudent2 />} />
        <Route path="/students" element={<students />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
