import React, { useContext, useEffect } from "react";
import { context } from "../../../../context/Context";
import MenuItem from "../menuitem/MenuItem";
import "./menu.scss";

export type menu = {
  name: string;
  unitPrice: number;
  quantity: number;
  _id: string;
};
const Menu = () => {
  const { state, dispatch } = useContext(context);
  useEffect(() => {
    const getMenu = async () => {
      const data = await fetch("http://localhost:8000/getmenu", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
      });
      const result = await data.json();
      dispatch({ type: "SET_MENU", data: result });
    };
    getMenu();
  }, []);
  return (
    <div className="menu-container">
      {state.menu.map((item: menu) => {
        return <MenuItem key={item._id} item={item} />;
      })}
    </div>
  );
};

export default Menu;
