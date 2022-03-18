import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { context } from "../../context/Context";
import "./cart.scss";
type itemType = {
  itemName: string;
  _id: string;
  quantity: number;
  unitPrice: number;
};
const Cart = () => {
  const { state, dispatch } = useContext(context);
  const navigate = useNavigate();
  const placeOrder = async () => {
    const data = await axios.put("http://localhost:8000/placeorder", [
      ...orderedItems,
    ]);
    dispatch({ type: "LOGIN", data: data.data });
    dispatch({ type: "CLEAR_CART" });
    navigate("/");
  };
  const orderedItems: itemType[] = state.menu.filter(
    (item: itemType) => item.quantity > 0
  );
  const totalCost = orderedItems.reduce(
    (total, item) => (total += item.quantity * item.unitPrice),
    0
  );
  return (
    <div className="cart-container">
      <div className="cart-table-container">
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Unit price</th>
              <th>Total price</th>
            </tr>
          </thead>
          <tbody>
            {orderedItems.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.itemName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unitPrice}</td>
                  <td>{item.quantity * item.unitPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>Your total order cost is : {totalCost}</p>
      </div>
      {orderedItems.length > 0 ? (
        <button onClick={placeOrder}>Place Order</button>
      ) : (
        <p>
          order your favorite from our delicious <Link to={`/menu`}>Menu</Link>
        </p>
      )}
    </div>
  );
};

export default Cart;
