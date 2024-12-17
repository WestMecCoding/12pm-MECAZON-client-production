import React, { useState } from "react";
import { validEmail, validPassword } from "./Regex";
import styles from "../styles/LoginForm.module.css"

import { Link } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
  };

  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    }
  };
  return (
      
      <form onSubmit={handleLogin}>
      <div className={styles.card}>
        <div className={styles.text}>
          <h2 className={styles.headerText}>Welcome back</h2>
          <p className={styles.text}> Please enter your log in detail below </p>
        </div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
        <div>
        <Link to="/sign-up"><p className={`${styles.text} ${styles.center}`}>don't have an account?</p></Link>
        <Link to="/employee-log-in"><p className={`${styles.text} ${styles.center}`}>Employee login page</p></Link>
        </div>
      </div>
      </form>
  );
}