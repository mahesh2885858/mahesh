import React, { useContext } from "react";
import { context } from "../../context/Context";
import "./cart.scss";
type itemType = {
  name: string;
  id: string;
  quantity: number;
  unitPrice: number;
};
const Cart = () => {
  const { state, dispatch } = useContext(context);
  const orderedItems: itemType[] = state.menu.filter(
    (item: itemType) => item.quantity > 0
  );
  const totalCost = orderedItems.reduce(
    (total, item) => (total += item.quantity * item.unitPrice),
    0
  );
  console.log(totalCost);
  return (
    <div className="cart-container">
      <div>
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
                <tr key={item.id}>
                  <td>{item.name}</td>
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
      <button>Place Order</button>
    </div>
  );
};

export default Cart;
