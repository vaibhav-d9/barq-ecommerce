import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Login.scss";
import { auth, db } from "../../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
          db.collection("users").doc(auth.user.uid).set({
            email: email,
            password: password,
          });

          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login_container">
      <Link to="/">
        <h1>B.A.R.Q</h1>
      </Link>
      <div className="login">
        <form className="login_container">
          {/* <div className="input_container">
          <label>NAME</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          />
        </div> */}
          <h3>Sign in to your account</h3>
          <div className="input_container">
            <label>EMAIL</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
            />
          </div>
          <div className="input_container">
            <label>PASSWORD</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
            />
            <small>Forgot password?</small>
          </div>
          <button onClick={signIn}>SIGN IN</button>
          <p>OR</p>
          <button className="register" onClick={register}>
            CREATE AN ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
