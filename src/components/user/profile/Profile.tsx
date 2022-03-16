import React, { useContext } from "react";
import { context } from "../../context/Context";
import "./profile.scss";
const Profile = () => {
  const { state, dispatch } = useContext(context);
  if (state.isLoggedIn) {
    return (
      <div className="profile-container">
        <div className="profile-img">your image</div>
        <div>
          <p>name:</p>
          <p>something:</p>
          <p>everything:</p>
          <p>something else:</p>
        </div>
      </div>
    );
  } else {
    return <div>you need to login to access this page</div>;
  }
};

export default Profile;
