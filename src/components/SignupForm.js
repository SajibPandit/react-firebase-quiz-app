import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";
import { useAuth } from "../contexts/AuthContext";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    //do validation
    if (password !== confirmPassword) {
      return setError("Password doesn't match");
    }
    try {
      setError("");
      setLoading("");
      await signup(email, password, username);
      history.push("/");
    } catch (error) {
      console.log(error);
      setError("Failed to create an account");
      setLoading(false);
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Name"
        icon="person"
        required
      />
      <TextInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        icon="alternate_email"
        required
      />
      <TextInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        icon="lock"
        required
      />
      <TextInput
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        icon="lock_clock"
        required
      />
      <Checkbox
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
        text="I agree to the Terms &amp; Conditions"
        required
      />
      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}

export default SignupForm;
