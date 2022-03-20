import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router";
import { context } from "./components/context/Context";
import HomeBeforeLogin from "./components/user/before-login/Home/Home";
import NavBar from "./components/user/Navbar/NavBar";
import "./app.scss";
import Menu from "./components/user/before-login/Home/menu/Menu";
import Profile from "./components/user/profile/Profile";
import Cart from "./components/user/cart/Cart";
import AdminNavBar from "./components/admin/adminNavbar/AdminNavBar";
import Register from "./components/user/register/Register";
import Login from "./components/user/login/Login";
import axios from "axios";
import Orders from "./components/user/orders/Orders";
import NotFoundPage from "./components/notfoundpage/NotFoundPage";
import AdminHome from "./components/admin/home/AdminHome";
import AllOrders from "./components/admin/allorders/AllOrders";
import AddItem from "./components/admin/addItem/AddItem";

function App() {
  const { state, dispatch } = useContext(context);
  useEffect(() => {
    const retainLogin = async () => {
      const data = await axios.get("http://localhost:8000/retainlogin");
      dispatch({ type: "LOGIN", data: data.data });
    };
    const retainAminLogin = async () => {
      const data = await axios.get("http://localhost:8000/admin/adminretain");
      dispatch({ type: "ADMIN_LOGIN", data: data.data });
    };
    retainLogin();
    retainAminLogin();
  }, []);
  return (
    <>
      {state.isAdminLoggedIn ? <AdminNavBar /> : <NavBar />}
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              state.isAdminLoggedIn ? <AdminHome /> : <HomeBeforeLogin />
            }
          />
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/profile"
            element={state.isLoggedIn ? <Profile /> : <NotFoundPage />}
          />
          <Route
            path="/user/cart"
            element={state.isLoggedIn ? <Cart /> : <NotFoundPage />}
          />
          <Route
            path="/register"
            element={state.isLoggedIn ? <NotFoundPage /> : <Register />}
          />
          <Route
            path="/login"
            element={state.isLoggedIn ? <NotFoundPage /> : <Login />}
          />
          <Route
            path="/orders"
            element={state.isLoggedIn ? <Orders /> : <NotFoundPage />}
          />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/admin/allorders" element={<AllOrders />} />
          <Route path="/admin/additem" element={<AddItem />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
