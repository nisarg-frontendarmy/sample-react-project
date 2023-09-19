import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const confirmPassword = watch("confirmpassword");

  return (
    <div className="Forgot-Password">
      <form className="Forgot" onSubmit={handleSubmit(onSubmit)}>
        <h2 id="Pass1">Forgot Password</h2>
        <label id="l1">Reset Password:</label>
        <input
          type="password"
          {...register("resetpassword", {
            required: "Please Enter The New Password",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
          placeholder="Enter Your New Password"
          id="Reset"
          name="resetpassword"
        />
        {errors.resetpassword && (
          <span className="password-error " style={{ color: "red" }}>
            {errors.resetpassword.message}
          </span>
        )}

        <label>Confirm Password:</label>

        <input
          className="l1"
          type="password"
          {...register("confirmpassword", {
            required: "Please Enter The Confirm Password",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
          placeholder="Enter Your Confirm Password"
          id="Confrim"
          name="confirmpassword"
        />
        {errors.confirmpassword && (
          <span className="password-error" style={{ color: "red" }}>
            {errors.confirmpassword.message}
          </span>
        )}

        <button id="btn2" type="submit">
          Reset Password
        </button>

        <ToastContainer theme="dark" />
      </form>
    </div>
  );
};

export default ForgotPassword;
