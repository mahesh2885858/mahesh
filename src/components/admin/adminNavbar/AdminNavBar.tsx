import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";

import { context } from "../../context/Context";
const AdminNavBar = () => {
  const { state, dispatch } = useContext(context);
  const adminlogout = async () => {
    console.log("logged out");
  };
  return (
    <nav>
      <div className="nav-left">
        <Link to="/">
          {state.isAdminLoggedIn ? <h1>{state.name}</h1> : <h1>Home</h1>}
        </Link>
      </div>
      <div className="nav-right-responsive">
        <label htmlFor="menu-responsive">
          <Menu />
        </label>
        <input type="checkbox" id="menu-responsive" />
        <div className="nav-right">
          {state.isAdminLoggedIn ? (
            <Link to={`/admin/allorders`}>All Orders</Link>
          ) : (
            <Link to={`/register`}>Register</Link>
          )}
          <Link to={`/menu`}>Menu</Link>
          {state.isAdminLoggedIn ? (
            <p onClick={adminlogout}>Logout</p>
          ) : (
            <Link to={`/admin/login`}>Login</Link>
          )}
          {state.isAdminLoggedIn ? (
            <Link to={`/admin/profile`}>Profile</Link>
          ) : undefined}
          {state.isAdminLoggedIn ? (
            <Link to={`/admin/additem`}>Add to Menu</Link>
          ) : undefined}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavBar;
