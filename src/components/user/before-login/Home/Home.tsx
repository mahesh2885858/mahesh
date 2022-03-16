import React, { useContext } from "react";
import { context } from "../../../context/Context";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <h1>Food Plaza</h1>
        <p>See Today's Special</p>
        <Link to={`/menu`}>
          <ArrowRightAltIcon
            fontSize="large"
            color="primary"
            className="arrow-Right"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
