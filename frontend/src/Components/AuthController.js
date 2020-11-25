import React, { useState } from "react";
import Login from "./Login";
import "./AuthController.css";
import SignUp from "./SignUp";

const AuthController = () => {
  const [login, setLogin] = useState("login");
  const [signup, setSignup] = useState("");

  const handleClickChangeToLogin = () => {
    setLogin("login");
    setSignup("");
  };
  const handleClickChangeToSignUp = () => {
    setSignup("signup");
    setLogin("");
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2
          className={login === "login" ? "active" : "inactive underlineHover"}
          onClick={handleClickChangeToLogin}
        >
          {" "}
          Sign In{" "}
        </h2>
        <h2
          className={signup === "signup" ? "active" : "inactive underlineHover"}
          onClick={handleClickChangeToSignUp}
        >
          Sign Up{" "}
        </h2>

        {login === "login" ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};

export default AuthController;
