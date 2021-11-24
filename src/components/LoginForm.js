import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";
import styles from "../styles/Login.module.css";
import { useAuth } from "../contexts/AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { login } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading("");
      await login(email, password);
      history.push("/");
    } catch (error) {
      console.log(error);
      setError("Failed to login");
      setLoading(false);
    }
  }
  return (
    <Form className={`${styles.login} form`} onSubmit={handleSubmit}>
      <TextInput
        type="email"
        placeholder="Enter Email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextInput
        type="password"
        placeholder="Enter Password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Dont't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
}
