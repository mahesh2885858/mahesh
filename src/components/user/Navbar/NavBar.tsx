import { Menu } from "@mui/icons-material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../../context/Context";
import "./navbar.scss";

const NavBar = () => {
  const { state, dispatch } = useContext(context);

  return (
    <nav>
      <div className="nav-left">
        <Link to="/">
          {state.isLoggedIn ? <h1>{state.name}</h1> : <h1>Home</h1>}
        </Link>
      </div>
      <div className="nav-right-responsive">
        <label htmlFor="menu-responsive">
          <Menu />
        </label>
        <input type="checkbox" id="menu-responsive" />
        <div className="nav-right">
          {state.isLoggedIn ? (
            <p>My Orders</p>
          ) : (
            <Link to={`/register`}>Register</Link>
          )}
          <Link to={`/menu`}>Menu</Link>
          {state.isLoggedIn ? <p>Logout</p> : <Link to={`/login`}>Login</Link>}
          {state.isLoggedIn ? <Link to={`/profile`}>Profile</Link> : undefined}
          {state.isLoggedIn ? <Link to={`/user/cart`}>Cart</Link> : undefined}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
