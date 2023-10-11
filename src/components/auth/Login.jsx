import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
// import { useUser } from './usercontext'; 
// import jsonData from "../../students.json";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useNavigate();
  const [loginError, setLoginError] = useState(null);
  // const { login } = useUser(); 

  // const loginUser = (emailaddress, password) => {
  //   return jsonData.Dashboard.find((user) =>
  //     user.emailaddress === emailaddress && user.password === password
  //   );
  // };



  const loginUser = async (emailaddress, password) => {
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email: emailaddress,
        password: password,
      });

      const token = response.data.token;

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("email",emailaddress);
        setLoginError(null);
        history("/dashboard");
      } else {
        setLoginError("Invalid email and password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setLoginError("An Error occurred while logging in.");
    }
  };

  const onSubmit = (data) => {
    loginUser("eve.holt@reqres.in", "Password");
    // const loggedInUser = loginUser(data.email, data.password);
    // if (loggedInUser) {
    //   login(loggedInUser); 
    //   localStorage.setItem("userdetails", JSON.stringify(loggedInUser));
    //   console.log("loggedInUser:", loggedInUser);
    //   setLoginError(null);
    //   history("/dashboard"); 
    // } else {
    //   setLoginError("Invalid email or password");
    // }
  };

  return (
    <div className="d-flex vh-100 main-div1">
      <div>
        <img className="main-div8" src="/images/rellipse1.png" alt="Circle" />
      </div>
      <div>
        <img className="main-div9" src="/images/rellipse2.png" alt="Circle" />
      </div>
      <div>
        <img
          className="main-div10"
          src="/images/welcomeback.png"
          alt="Message..!"
        />
      </div>
      <div className=" border border-white p-5 flex-column align-items-center main-div2">
        <div className="text-center fs-2 mb-3 text-white">
          Login to your Account
        </div>
        <Form onSubmit={handleSubmit(onSubmit)} className="w-100 m-3">
          <Form.Group controlId="email">
            <Form.Label className="text-white">Email Address</Form.Label>
            <Form.Control
              className={`bg-transparent text-white placeholder-text-color ${
                errors.email ? "is-invalid" : ""
              }`}
              {...register("email", {
                required: "Please enter email",
                pattern: {
                  value:
                    /^[A-Za-z]+[A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                  message: "Invalid Email Address",
                },
              })}
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label className="mt-2 text-white">Password</Form.Label>
            <Form.Control
              className={`bg-transparent text-white placeholder-text-color ${
                errors.password ? "is-invalid" : ""
              }`}
              {...register("password", {
                required: "Please enter a password",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                maxLength: {
                  value: 32,
                  message: "Password must be at most 32 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Z]).*$/,
                  message: "Password must start with an uppercase letter",
                },
              })}
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </Form.Group>

          {loginError && (
            <div className="text-danger text-center mt-2">{loginError}</div>
          )}

          <Button
            variant="primary"
            size="lg"
            type="submit"
            className="mx-auto d-flex justify-content-center text-white mt-4 main-div20"
          >
            Log In
          </Button>
        </Form>

        <Link className="text-decoration-none m-2 text-white" to="/signup">
          Don't have an account? Register here.
        </Link>
        <Link to="/forgotpassword" className="text-decoration-none text-white">
          Forgot Password
        </Link>
      </div>
    </div>
  );
};

export default Login;
