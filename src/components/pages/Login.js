import React from "react";
import Illustration from "../Illustration";
import LoginForm from "../LoginForm";

function Login() {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <LoginForm/>
      </div>
    </div>
  );
}

export default Login;