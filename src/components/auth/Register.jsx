import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [emailErrMessage, setEmailErrMessage] = useState("");
  const [passErrMessage, setPassErrMessage] = useState("");
  const [nameErrMessage, setNameErrMessage] = useState("");

  const [signnedIn, setsignnedIn] = useState("");
  const history = useNavigate();

  const handleSignup = () => {
    if (!name) {
      setNameErrMessage("Please Enter Your FullName");
    }
    if (!email) {
      setEmailErrMessage("Please Enter Your Email");
    }
    if (!pass) {
      setPassErrMessage("Please Enter Your Password");
    } else {
      setsignnedIn(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2> SignUp Your Account</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => [setName(e.target.value), setNameErrMessage("")]}
          type="name"
          id="name"
          placeholder="Enter Your Full Name"
        />
        {nameErrMessage && <span style={{color:"red", textAlign:"initial"}}>{nameErrMessage}</span>}

        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => [setEmail(e.target.value), setEmailErrMessage("")]}
          type="email"
          placeholder="Enter Your Email"
          id="email"
          name="email"
        />
        {emailErrMessage && <span style={{color:"red", textAlign:"initial"}}>{emailErrMessage}</span>}

        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => [setPass(e.target.value), setPassErrMessage("")]}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        {passErrMessage && <span style={{color:"red", textAlign:"initial"}}>{passErrMessage}</span>}
        {!signnedIn ? (
          <button onClick={handleSignup} type="submit">
            SignIn
          </button>
        ) : (
          <p>You are SignedIn.</p>
        )}
      </form>

      <button className="link-btn" onClick={() => history("/")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
export default Register;
