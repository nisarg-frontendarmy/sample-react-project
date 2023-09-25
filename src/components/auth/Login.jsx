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
      <div>
        <img
          className="img-fluid d-flex rounded-top-left rounded-bottom-left align-items-center w-100 vh-100"
          src="/images/loginpage.JPG"
          alt="loginpage"
        />
      </div>
      <div className=" border border-black p-5 flex-column align-items-center main-div2">
        <div className="text-center fs-2 mb-3 text-black">
          Login to your Account
        </div>
        <Form onSubmit={handleSubmit(onSubmit)} className="w-100 m-3">
          <Form.Group controlId="email">
            <Form.Label className="text-black">Email Address</Form.Label>
            <Form.Control
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
            <Form.Label className="mt-2 text-black">Password</Form.Label>
            <Form.Control
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
              placeholder="********"
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
              className="mx-auto d-flex justify-content-center text-black mt-4"
            >
              Log In
            </Button>
          ) : (
            <p>You are Logged In.</p>
          )}
        </Form>

        <Link className="text-decoration-none  m-2 text-black" to="/signup">
          Don't have an account? Register here.
        </Link>
        <Link to="/signup" className=" text-decoration-none text-black">
          Sign Up
        </Link>
        <Link to="/forgotpassword" className=" text-decoration-none text-black">
          Forgot Password
        </Link>
      </div>
    </div>
  );
};

export default Login;
