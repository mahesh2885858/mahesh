import axios from "axios";
import React, { FormEvent, useContext, useRef } from "react";
import { useNavigate } from "react-router";
import { context } from "../../context/Context";
import "./adminlogin.scss";
const AdminLogin = () => {
  const { state, dispatch } = useContext(context);
  const navigate = useNavigate();
  const username = useRef<null | HTMLInputElement>(null);
  const password = useRef<null | HTMLInputElement>(null);
  const adminLogin = async (e: FormEvent) => {
    e.preventDefault();
    const details = {
      username: username.current?.value,
      password: password.current?.value,
    };
    const data = await axios.post(
      "http://localhost:8000/admin/adminlogin",
      details
    );
    dispatch({ type: "ADMIN_LOGIN", data: data.data });
    navigate("/admin");
  };
  return (
    <div className="admin-login-contaier">
      <form action="#" onSubmit={adminLogin}>
        <label htmlFor="adminusername">Admin Username:</label>
        <input
          ref={username}
          type="text"
          id="adminusername"
          name="adminusername"
        />
        <label htmlFor="adminpassword">Admin Password:</label>
        <input
          type="password"
          ref={password}
          name="adminpassword"
          id="adminpassword"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
