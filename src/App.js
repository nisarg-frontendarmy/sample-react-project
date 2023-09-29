import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Student from "./Student";
import SingleStudent from "./components/dashboard/SingleStudent";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import "bootstrap/dist/css/bootstrap.min.css";


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
        <Route path="/students" element={<students />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
