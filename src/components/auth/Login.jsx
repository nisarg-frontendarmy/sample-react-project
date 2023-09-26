import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const onSubmit = (data) => {
    if (data.email === "admin@admin.com" && data.password === "Password") {
      setLoggedIn(true);
      history("dashboard");
    } else {
      setLoggedIn(false);
    }
  };

  return (
    <div className="d-flex vh-100 main-div1">
      {/* <div>
        <img
          className="img-fluid d-flex rounded-top-left rounded-bottom-left align-items-center w-100 vh-100"
          src="/images/loginpage.JPG"
          alt="loginpage"
        />
      </div> */}
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
        {/* <div className="text-white fs-2 text-left border border-primary main-div11">
          Glad you are back.!
        </div> */}
      </div>
      {/* <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="fs-1 text-white">Welcome Back.!</div>
      </div> */}
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
              placeholder="Enter Your Email"
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
              variant="success"
              size="lg"
              type="submit"
              className="mx-auto d-flex justify-content-center text-white mt-4"
            >
              Log In
            </Button>
          ) : (
            <p>You are Logged In.</p>
          )}
        </Form>

        <Link className="text-decoration-none  m-2 text-white" to="/signup">
          Don't have an account? Register here.
        </Link>
        <Link to="/signup" className=" text-decoration-none text-white">
          Sign Up
        </Link>
        <Link to="/forgotpassword" className=" text-decoration-none text-white">
          Forgot Password
        </Link>
      </div>
    </div>
  );
};

export default Login;
