import React, { useContext, useEffect } from "react";
import { context } from "../../context/Context";

const AdminHome = () => {
  const { state, dispatch } = useContext(context);
  useEffect(() => {
    const getAdmin = async () => {
      console.log("admin page");
    };
  }, []);
  if (state.isAdminLoggedIn) {
    return <div>AdminHome</div>;
  } else {
    return <div>somtethng</div>;
  }
};

export default AdminHome;
