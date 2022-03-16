import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import { context } from "./components/context/Context";
import HomeAfterLogin from "./components/user/after-login/Home/Home";
import HomeBeforeLogin from "./components/user/before-login/Home/Home";
import NavBar from "./components/user/Navbar/NavBar";
import "./app.scss";

function App() {
  const { state, dispatch } = useContext(context);
  console.log(state.isLoggedIn);
  return (
    <>
      <NavBar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomeBeforeLogin />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
