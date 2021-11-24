import React from "react";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

function Signup() {
  return (
    <div>
      <h1>Create your account</h1>
      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;
