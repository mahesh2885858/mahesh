import { Menu } from "@mui/icons-material";
import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../../context/Context";
import "./navbar.scss";

const NavBar = () => {
  const { state, dispatch } = useContext(context);
  const logout = async () => {
    try {
      const data = await axios.get("http://localhost:8000/logout");
      dispatch({ type: "LOGOUT" });
    } catch (err) {
      console.log(err);
    }
  };
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
            <Link to={`/orders`}>My Orders</Link>
          ) : (
            <Link to={`/register`}>Register</Link>
          )}
          <Link to={`/menu`}>Menu</Link>
          {state.isLoggedIn ? (
            <p onClick={logout}>Logout</p>
          ) : (
            <Link to={`/login`}>Login</Link>
          )}
          {state.isLoggedIn ? <Link to={`/profile`}>Profile</Link> : undefined}
          {state.isLoggedIn ? (
            <Link to={`/user/cart`}>
              Cart
              <span className="cart-count">
                (
                {state.menu.reduce(
                  (
                    total: number,
                    item: {
                      name: string;
                      id: string;
                      quantity: number;
                      unitPrice: number;
                    }
                  ) => {
                    return (total += item.quantity);
                  },
                  0
                )}
                ){" "}
              </span>
            </Link>
          ) : undefined}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
