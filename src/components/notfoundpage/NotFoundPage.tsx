import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>
        either the page does not exist or you don't have the permission to visit
        the page{" "}
      </p>
      <p>
        Go to <Link to={`/`}>Home</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
