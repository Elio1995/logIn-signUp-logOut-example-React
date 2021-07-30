import React from "react";
import { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";

function App() {
  const [users, setUsers] = useState([]);
  const [loggedinUser, setloggedinUser] = useState("");

  useEffect(
    () => [
      fetch("http://localhost:4000/users")
        .then((resp) => resp.json())
        .then((users) => setUsers(users)),
    ],
    []
  );

  const logOut = () => {
    setloggedinUser("");
  };

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/home">
          <Home logOut={logOut} loggedinUser={loggedinUser}></Home>
        </Route>
        <Route path="/login" exact>
          {loggedinUser ? (
            <Redirect to="/home"></Redirect>
          ) : (
            <Login users={users} setloggedinUser={setloggedinUser}></Login>
          )}
        </Route>
        <Route path="/signUp" exact>
          {loggedinUser ? (
            <Redirect to="/home"></Redirect>
          ) : (
            <SignUp
              users={users}
              setUsers={setUsers}
              setloggedinUser={setloggedinUser}
            ></SignUp>
          )}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
