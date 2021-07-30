import React from "react";
import { useState } from "react";
// import { Link, Route } from "react-router-dom";
// import "../css/sighnUp.css";

function SignUp({ users, setUsers, setloggedinUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let newUser = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      phoneNumber: phoneNumber,
      email: email,
    };

    const userExist = users.find(
      (user) =>
        user.username === newUser.username || user.email === newUser.email
    );

    if (userExist) {
      alert("This user exist");
    } else {
      fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw Error("Failed");
          }
        })
        .then((newUser) => {
          setUsers([...users, newUser]);
        });
      setloggedinUser(newUser);
    }
  }

  return (
    <section className="wrapper-sign-up">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Register</h2>
        <div className="first-last-name">
          <input
            onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
            className="login-input"
            required={true}
            placeholder="Add Name"
          ></input>
          <input
            onChange={(e) => setLastName(e.target.value)}
            name="lastName"
            required={true}
            className="login-input"
            placeholder="Add Surname"
          ></input>
        </div>
        <div className="label">
          <label>Email</label>
        </div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          className="login-input"
          required={true}
          placeholder="  Email.."
        ></input>
        <div className="label">
          <label>Phone number</label>
        </div>
        <input
          onChange={(e) => setPhoneNumber(e.target.value)}
          name="phoneNumber"
          className="login-input"
          required={true}
          placeholder="  Phone number.."
        ></input>
        <div className="label">
          <label>Username</label>
        </div>
        <input
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          className="login-input"
          required={true}
          placeholder="  Username"
        ></input>
        <div className="label">
          <label>Password</label>
        </div>
        <input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          className="login-input"
          required={true}
          placeholder="  Password"
        ></input>
        <div>
          <button className="sign-btn">Sign up</button>
        </div>
      </form>
    </section>
  );
}

export default SignUp;
