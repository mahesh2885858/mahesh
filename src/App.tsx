import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import { context } from "./components/context/Context";
import HomeBeforeLogin from "./components/user/before-login/Home/Home";
import NavBar from "./components/user/Navbar/NavBar";
import "./app.scss";
import Menu from "./components/user/before-login/Home/menu/Menu";

function App() {
  const { state, dispatch } = useContext(context);
  return (
    <>
      <NavBar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomeBeforeLogin />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
