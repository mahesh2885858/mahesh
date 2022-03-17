import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import { context } from "./components/context/Context";
import HomeBeforeLogin from "./components/user/before-login/Home/Home";
import NavBar from "./components/user/Navbar/NavBar";
import "./app.scss";
import Menu from "./components/user/before-login/Home/menu/Menu";
import Profile from "./components/user/profile/Profile";
import Cart from "./components/user/cart/Cart";
import Register from "./components/user/register/Register";
import Login from "./components/user/login/Login";

function App() {
  const { state, dispatch } = useContext(context);
  return (
    <>
      <NavBar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomeBeforeLogin />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
