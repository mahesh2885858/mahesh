import React, { useContext } from "react";
import { context } from "../../context/Context";

const NavBar = () => {
  const { state, dispatch } = useContext(context);
  if (state.isLoggedIn) {
    return (
        
    );
  } else {
    return <div>something</div>;
  }
};

export default NavBar;
