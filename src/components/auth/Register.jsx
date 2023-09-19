import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="auth-form-container">
      <h2> SignUp Your Account</h2>
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Full Name</label>
        <input
          {...register("name", {
            required: "Please enter your full name",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Username must not include numbers",
            },
          })}
          type="text"
          id="name"
          placeholder="Enter Your Full Name"
        />
        {errors.name && (
          <span style={{ color: "red", textAlign: "initial" }}>
            {errors.name?.message}
          </span>
        )}

        <label htmlFor="email">Email</label>
        <input
          {...register("email", {
            required: "Please enter your email",
            pattern: {
              value:
                /^[A-Za-z]+[A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: "Invalid Email Address",
            },
          })}
          type="email"
          placeholder="Enter Your Email"
          id="email"
        />
        {errors.email && (
          <span style={{ color: "red", textAlign: "initial" }}>
            {errors.email?.message}
          </span>
        )}

        <label htmlFor="password">Password</label>
        <input
          {...register("password", {
            required: "Please enter your password",
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
          id="password"
        />
        {errors.password && (
          <span style={{ color: "red", textAlign: "initial" }}>
            {errors.password?.message}
          </span>
        )}

        <button type="submit">SignIn</button>
      </form>

      <button className="link-btn" onClick={() => history("/")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default Register;
