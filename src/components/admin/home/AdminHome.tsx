import React, { useContext, useEffect } from "react";
import { context } from "../../context/Context";
import AdminLogin from "./AdminLogin";

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
    return <AdminLogin />;
  }
};

export default AdminHome;
