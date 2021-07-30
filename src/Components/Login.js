import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/login.css";

function Login({ users, setloggedinUser }) {
  const [username, setUsename] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const userMatch = users.find(
      (user) => user.username === username && user.password === password
    );
    if (userMatch) {
      setloggedinUser(userMatch);
    } else {
      alert("Username or password incorrect");
    }
  }

  return (
    <section className="wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>
        <div className="label">
          <label>Username</label>
        </div>
        <input
          onChange={(e) => setUsename(e.target.value)}
          required={true}
          name="username"
          className="login-input"
          placeholder="Add Username"
        ></input>
        <div className="label">
          <label>Password</label>
        </div>
        <input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          required={true}
          type="password"
          className="login-input"
          placeholder="Add Password"
        ></input>
        <div>
          <button className="sign-btn">Sign in</button>
        </div>
        <div className="sign-up">
          <h3 className="dont-have-title">Don't have an account?</h3>
          <Link className="sign-up-link" to="/signUp">
            Sign up
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
