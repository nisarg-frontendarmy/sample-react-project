import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Button } from "react-bootstrap";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // const history = useNavigate();

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
    <div className="d-flex vh-100 main-div1 main-div4">
      <>
        <div>
          <img
            src="/images/singupmain2.JPG"
            className="w-100 vh-100"
            alt="signup"
          />
        </div>
      </>
      <div className="border border-black p-5  flex-column align-items-center main-div5">
        <div className="text-center fs-2 mb-3 text-black">
          SignUp Your Account
        </div>
        <Form onSubmit={handleSubmit(onSubmit)} className="w-100 mt-4">
          <Form.Group controlId="name">
            <Form.Label className="mt-2">Full Name</Form.Label>
            <Form.Control
              className="mt-0"
              {...register("name", {
                required: "Please enter your full name",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Username must not include numbers",
                },
              })}
              type="text"
              placeholder="Enter Your Full Name"
            />
            {errors.name && (
              <span className="text-danger text-left">
                {errors.name?.message}
              </span>
            )}
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label className="mt-3">Email</Form.Label>
            <Form.Control
              className="mt-0"
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
            />
            {errors.email && (
              <span className="text-danger text-left">
                {errors.email?.message}
              </span>
            )}
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label className="mt-3 ">Password</Form.Label>
            <Form.Control
              className="mt-0"
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
            />
            {errors.password && (
              <span className="text-danger text-left">
                {errors.password?.message}
              </span>
            )}
          </Form.Group>

          <Button
            variant="success primary"
            className="mx-auto d-flex justify-content-center mt-3"
            type="submit"
          >
            Sign In
          </Button>
          <ToastContainer theme="dark" />
        </Form>

        <Link
          className="text-decoration-none text-black mx-auto d-flex justify-content-center m-3"
          to="/"
        >
          Already have an account? Login here.
        </Link>
      </div>
    </div>
  );
};

export default Register;
