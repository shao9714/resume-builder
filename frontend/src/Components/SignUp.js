import React, { useState } from "react";
import Axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("form submitted");

    Axios({
      method: "POST",
      url: "logintest",
      headers: {
        "Content-type": "application/json",
      },
      data: {
        email: email,
        password: password,
      },
    }).then((res) => {
      console.log("Axios res message " + res.data.message);
    });
  };

  return (
    <div>
      <div class="fadeIn first">
        <img
          src="http://danielzawadzki.com/codepen/01/icon.svg"
          id="icon"
          alt="User Icon"
        />
      </div>

      <form id="register">
        <input
          type="text"
          id="signup"
          class="fadeIn second"
          name="email"
          placeholder="signup"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          id="password"
          class="fadeIn third"
          name="login"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          class="fadeIn fourth"
          value="Sign Up"
          onClick={handleSubmit}
        />
      </form>

      <div id="formFooter">
        <a class="underlineHover" href="#">
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default SignUp;
