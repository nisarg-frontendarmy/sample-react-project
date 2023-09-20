import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const history = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    setTimeout(() => {
      toast.success("Signup Account Successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      reset();
    }, 100);
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
          <span className="text-danger text-left">{errors.name?.message}</span>
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
          <span className="text-danger text-left">{errors.email?.message}</span>
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
          <span className="text-danger text-left">
            {errors.password?.message}
          </span>
        )}

        <button className="text-black" type="submit">
          SignIn
        </button>
        <ToastContainer theme="dark" />
      </form>

      <button className="link-btn" onClick={() => history("/")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default Register;
