import React from "react";

const SignUp = () => {
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
          id="signup"
          class="fadeIn second"
          name="signup"
          placeholder="signup"
        />
        <input
          type="text"
          id="password"
          class="fadeIn third"
          name="login"
          placeholder="password"
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
