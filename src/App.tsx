import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import { context } from "./components/context/Context";
import HomeAfterLogin from "./components/user/after-login/Home/Home";
import HomeBeforeLogin from "./components/user/before-login/Home/Home";

function App() {
  const { state, dispatch } = useContext(context);
  console.log(state.isLoggedIn);
  return (
    <Routes>
      <Route
        path="/"
        element={state.isLoggedIn ? <HomeAfterLogin /> : <HomeBeforeLogin />}
      />
    </Routes>
  );
}

export default App;
