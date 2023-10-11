import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Student from "./Student";
import SingleStudent from "./components/dashboard/SingleStudent";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./components/auth/usercontext";
import ImagePage from './components/dashboard/ImagePage'
// import { store } from "./app/store";
// import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/image/:imageId" Component={ImagePage} />
          <Route path="/student" element={<Student />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/singlestudent/:studentId" element={<SingleStudent />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/students" element={<students />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
