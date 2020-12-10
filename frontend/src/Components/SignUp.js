import React from "react";
import Axios from "axios";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("form submitted");

    Axios({
      method: "POST",
      url: "http://localhost:5000/register",
      headers: {
        "Content-type": "application/json",
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

      <form id="register" onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="signup"
          class="fadeIn second"
          name="email"
          placeholder="signup"
          value={this.state.name}
        />
        <input
          type="text"
          id="password"
          class="fadeIn third"
          name="login"
          placeholder="password"
          value={this.state.password}
        />
        <input type="submit" class="fadeIn fourth" value="Sign Up" />
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
