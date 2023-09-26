import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Button } from "react-bootstrap";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    if (data.resetpassword !== data.confirmpassword) {
      toast.error("Passwords do not match.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setTimeout(() => {
      toast.success("Password Reset Successful!", {
        position: "top-right",
        autoClose: 3000,
      });
      reset();
    }, 100);
  };

  const password = watch("resetpassword");

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 main-div7">
      <div>
        <img className="main-div15" src="/images/fellipse1.png" alt="Circle" />
      </div>
      <div>
        <img className="main-div16" src="/images/fellipse2.png" alt="Circle" />
      </div>
      <div>
        <img className="main-div17" src="/images/NoWorries.png" alt="No worrries" />
      </div>
      <Form
        className="border border-white w-25 vh-20  rounded-top p-5 text-left d-block   main-div14"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-center fs-3 vh-50 text-white">Forgot Password</div>
        <Form.Group controlId="Reset" className="w-100 ">
          <Form.Label className="w-20 mt-4 text-white">Reset Password:</Form.Label>
          <Form.Control
          className="mt-0 bg-transparent text-white placeholder-text-color"
            type="password"
            {...register("resetpassword", {
              required: "Please Enter The New Password",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            placeholder="Reset Password"
          />
          {errors.resetpassword && (
            <span className="text-danger text-left">
              {errors.resetpassword.message}
            </span>
          )}
        </Form.Group>

        <Form.Group controlId="Confirm">
          <Form.Label className="mt-3 text-white">Confirm Password:</Form.Label>
          <Form.Control
          className="mt-0 bg-transparent text-white placeholder-text-color"
            type="password"
            {...register("confirmpassword", {
              required: "Please Enter The Confirm Password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            placeholder="Confirm Password"
          />
          {errors.confirmpassword && (
            <span className="text-danger text-left">
              {errors.confirmpassword.message}
            </span>
          )}
        </Form.Group>

        <Button
          variant="success"
          className="mx-auto d-flex justify-content-center mt-4"
          type="submit"
        >
          Reset Password
        </Button>

        <ToastContainer theme="dark" />
      </Form>
    </div>
  );
};

export default ForgotPassword;
