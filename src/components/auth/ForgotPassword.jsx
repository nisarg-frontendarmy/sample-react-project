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
    <div className="d-flex justify-content-center align-items-center vh-100 w-auto d-block">
      <Form
        className="border rounded-top p-5 text-left d-block"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-center fs-3 ">Forgot Password</div>
        <Form.Group controlId="Reset" className="w-100">
          <Form.Label className="mb-0 w-20">Reset Password:</Form.Label>
          <Form.Control
            type="password"
            {...register("resetpassword", {
              required: "Please Enter The New Password",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            placeholder="Enter Your New Password"
          />
          {errors.resetpassword && (
            <span className="text-danger text-left">
              {errors.resetpassword.message}
            </span>
          )}
        </Form.Group>

        <Form.Group controlId="Confirm">
          <Form.Label className="mb-0">Confirm Password:</Form.Label>
          <Form.Control
            className="l1"
            type="password"
            {...register("confirmpassword", {
              required: "Please Enter The Confirm Password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            placeholder="Enter Your Confirm Password"
          />
          {errors.confirmpassword && (
            <span className="text-danger text-left">
              {errors.confirmpassword.message}
            </span>
          )}
        </Form.Group>

        <Button
          variant="success"
          className="mx-auto d-flex justify-content-center"
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
