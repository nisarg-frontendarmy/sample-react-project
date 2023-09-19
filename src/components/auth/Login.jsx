import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const onSubmit = (data) => {
    if (data.email === "user@example.com" && data.password === "password") {
      setLoggedIn(true);
      history("dashboard");
    } else {
      setLoggedIn(false);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email Address</label>
        <input
          {...register("email", {
            required: "Please enter email",
          })}
          type="email"
          placeholder="Enter Your Email"
          id="email"
          name="email"
        />
        {errors.email && (
          <span style={{ color: "red", textAlign: "initial" }}>
            {errors.email.message}
          </span>
        )}
        <label htmlFor="password">Password</label>
        <input
          {...register("password", {
            required: "Please enter password",
          })}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        {errors.password && (
          <span style={{ color: "red", textAlign: "initial" }}>
            {errors.password.message}
          </span>
        )}
        {!loggedIn ? (
          <button type="submit">
            Log In
          </button>
        ) : (
          <p>You are Logged In.</p>
        )}
      </form>
      <button className="link-btn" onClick={() => history("signup")}>
        Don't have an account? Register here.
      </button>
      <Link  to="/signup" className="link">
        SignUp
      </Link>
      <Link className="link" to="/forgotpassword">
        Forgot Password
      </Link>
    </div>
  );
};

export default Login;
