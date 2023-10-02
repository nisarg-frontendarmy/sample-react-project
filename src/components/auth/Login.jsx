import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import jsonData from "../../students.json";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = (emailaddress, password) => {
    return jsonData.Dashboard.filter((user) =>
      user.emailaddress === emailaddress && user.password === password
        ? user
        : false
    );
  };

  const onSubmit = (data) => {
    const [loggedInUser] = loginUser(data.email, data.password);
    if (loggedInUser) {
      localStorage.setItem("userdetails", JSON.stringify(loggedInUser));
      setLoggedIn(true);
      history("dashboard");
    } else {
      setLoggedIn(false);
    }
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
              className="bg-transparent text-white placeholder-text-color"
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
              <span className="text-danger text-left">
                {errors.email?.message}
              </span>
            )}
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label className="mt-2 text-white">Password</Form.Label>
            <Form.Control
              className="bg-transparent text-white placeholder-text-color"
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
              <span className="text-danger text-left">
                {errors.password.message}
              </span>
            )}
          </Form.Group>

          {!loggedIn ? (
            <Button
              variant="primary"
              size="lg"
              type="submit"
              className="mx-auto d-flex justify-content-center text-white mt-4 main-div20 "
            >
              Log In
            </Button>
          ) : (
            <p>You are Logged In.</p>
          )}
        </Form>

        <Link className="text-decoration-none m-2 text-white" to="/signup">
          Don't have an account? Register here.
        </Link>
        {/* <Link to="/signup" className="text-decoration-none text-white">
          Sign Up
        </Link> */}
        <Link to="/forgotpassword" className="text-decoration-none text-white">
          Forgot Password
        </Link>
      </div>
    </div>
  );
};

export default Login;
