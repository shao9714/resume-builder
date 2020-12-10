import React from "react";
import Axios from "axios";

const Login = () => {
  Axios({
    method: 'POST',
    url: "http://localhost:5000/login",
    headers: {
      "Content-type": "application/json"
    }
  }).then(res => {
    console.log("Axios res message "+ res.data.message);
  });

  return (
    <div>
      <div class="fadeIn first">
        <img
          src="http://danielzawadzki.com/codepen/01/icon.svg"
          id="icon"
          alt="User Icon"
        />
      </div>

      <form>
        <input
          type="text"
          id="login"
          class="fadeIn second"
          name="login"
          placeholder="login"
        />
        <input
          type="text"
          id="password"
          class="fadeIn third"
          name="login"
          placeholder="password"
        />
        <input type="submit" class="fadeIn fourth" value="Log In" />
      </form>

      <div id="formFooter">
        <a class="underlineHover" href="#">
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default Login;
