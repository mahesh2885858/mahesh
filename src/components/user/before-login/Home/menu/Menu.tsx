import React, { useContext } from "react";
import { context } from "../../../../context/Context";
import MenuItem from "../menuitem/MenuItem";
import "./menu.scss";

export type menu = {
  name: string;
  unitPrice: number;
  quantity: number;
  id: string;
};
const Menu = () => {
  const { state, dispatch } = useContext(context);
  return (
    <div className="menu-container">
      {state.menu.map((item: menu) => {
        return <MenuItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Menu;
