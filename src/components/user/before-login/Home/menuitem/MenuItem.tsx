import React, { FC, useContext } from "react";
import { context } from "../../../../context/Context";
import "./menuitem.scss";
type propsType = {
  name: string;
  id: string;
  unitPrice: number;
  quantity: number;
};
const MenuItem = (props: any) => {
  const { state, dispatch } = useContext(context);
  const increaseCount = (id: string) => {
    dispatch({ type: "INCREASE", data: id });
  };
  const decreseCount = (id: string) => {
    dispatch({ type: "DECREASE", data: id });
  };

  return (
    <div className="menu-item" key={props.item.id}>
      <div>
        <img src="item.jpg" alt={props.item.name} />
      </div>
      <p>{props.item.name}</p>
      <p>price: {props.item.unitPrice}</p>
      {state.isLoggedIn ? (
        <div>
          <button
            onClick={() => {
              decreseCount(props.item.id);
            }}
          >
            -
          </button>
          <span>{props.item.quantity}</span>
          <button onClick={() => increaseCount(props.item.id)}>+</button>
        </div>
      ) : undefined}
    </div>
  );
};

export default MenuItem;
