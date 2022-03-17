import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import Reducer from "./Reducer";
import "./register.scss";
const initState = {
  username: "",
  email: "",
  password: "",
  cpassword: "",
};
export type state = typeof initState;
const Register = () => {
  const [state, dispatch] = useReducer(Reducer, initState);
  const register = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await fetch("http://localhost:8000/register", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(state),
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register-container">
      <form onSubmit={register} action="#">
        <label htmlFor="username"> Username:</label>
        <input
          type="text"
          value={state.username}
          name="username"
          id="username"
          onChange={(e) =>
            dispatch({ type: "FIELD", field: "username", data: e.target.value })
          }
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "FIELD", field: "email", data: e.target.value })
          }
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: "FIELD", field: "password", data: e.target.value })
          }
        />
        <label htmlFor="cpassword">Confirm password: </label>
        <input
          type="password"
          name="cpassword"
          id="cpassword"
          value={state.cpassword}
          onChange={(e) =>
            dispatch({
              type: "FIELD",
              field: "cpassword",
              data: e.target.value,
            })
          }
        />
        <button>Register</button>
      </form>
      <p>
        Already have an account? Login <Link to={`/login`}>Here</Link>
      </p>
    </div>
  );
};

export default Register;
