import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { context } from "../../context/Context";
import "./login.scss";
const Login = () => {
  const { state, dispatch } = useContext(context);
  const username = useRef<null | HTMLInputElement>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const details = {
        username: username.current?.value,
        password: password.current?.value,
      };
      console.log(details);
      const data = await fetch("http://localhost:8000/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(details),
      });
      const result = await data.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={login} action="#">
        <label htmlFor="username">Username:</label>
        <input type="text" ref={username} name="username" id="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" ref={password} name="password" id="password" />
        <button>Login</button>
      </form>
      <p>
        Don't have an account create one <Link to={`/register`}>Here</Link>
      </p>
    </div>
  );
};

export default Login;
