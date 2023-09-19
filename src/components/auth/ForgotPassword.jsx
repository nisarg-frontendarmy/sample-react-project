import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [resetpassword, setResetPassword] = useState("");
  const [confirmpassword, setConfrimPassword] = useState("");
  const [resetpasswordErrMessage, setResetPasswordErrMessage] = useState("");
  const [confrimpasswordErrMessage, setConfrimPasswordErrMessage] =
    useState("");

  const [forgotp, setForgotp] = useState("");
  // const history = useNavigate();

  const hanldeForgotten = () => {
    if (!resetpassword) {
      setResetPasswordErrMessage("Please Enter The New Password");
    }
    if (!confirmpassword) {
      setConfrimPasswordErrMessage("Please Enter The Confrim Password");
    } else {
      toast.success("Password Reset Successful!", {
        position: "top-right",
        autoClose: 3000,
      });
      // history("/");
      setForgotp(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(resetpassword);
  };

  return (
    <div className="Forgot-Password">
      <form className="Forgot" onSubmit={handleSubmit}>
        <h2 id="Pass1">Forgot Password</h2>
        <label id="l1">Reset Password:</label>
        <input
          type="password"
          value={resetpassword}
          onChange={(e) => [
            setResetPassword(e.target.value),
            setResetPasswordErrMessage(""),
          ]}
          placeholder="Enter Your New Password"
          id="Reset"
          name="ResetPassword"
        />
        {resetpasswordErrMessage && (
          <span className="password-error " style={{ color: "red" }}>
            {resetpasswordErrMessage}
          </span>
        )}

        <label>Confrim Password:</label>

        <input
        className="l1"
          type="password"
          value={confirmpassword}
          placeholder="Enter Your Confrim Password"
          onChange={(e) => [
            setConfrimPassword(e.target.value),
            setConfrimPasswordErrMessage(""),
          ]}
          id="Confrim"
          name="Confrim Password"
        />
        {confrimpasswordErrMessage && (
          <span className="password-error" style={{ color: "red" }}>
            {confrimpasswordErrMessage}
          </span>
        )}

        {!forgotp ? (
          <button id="btn2" onClick={() => hanldeForgotten()} type="Submit">
            Reset Password
          </button>
        ) : (
          <p>Your Password Successfullyu reset.</p>
        )}
        <ToastContainer theme="dark"/>
      </form>
    </div>
  );
};

export default ForgotPassword;
