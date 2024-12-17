import styles from "../styles/LoginForm.module.css";

import React, { useState } from "react";
import { validEmail, validPassword } from "../components/Regex";

import { Link } from "react-router-dom";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setConfirmPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    }
    if (validPassword.test(password)) {
      setPwdError(false);
    }
    if (validPassword.test(email)) {
      setEmailErr(false);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup email:", email, "password:", password);
  };

  return (
    <form onSubmit={handleSignup}>
      <div className={styles.card}>
        <div className={styles.text}>
          <h2 className={styles.headerText}>Sign up</h2>
          <p className={styles.text}> create new account below </p>
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

        <input
          type="password"
          placeholder="Enter confirm password"
          value={comfirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" onClick={validate}>
          {" "}
          Signup
        </button>
        {/* create a button for employee */}
        <Link to="/log-in">
          <p className={`${styles.text} ${styles.center}`}>
            already have an account?
          </p>
        </Link>
      </div>
    </form>
  );
}
