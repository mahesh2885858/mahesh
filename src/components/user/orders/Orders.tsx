import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../../context/Context";
import "./orders.scss";
type orderItem = {
  isDelivered: boolean;
  isCancelled: boolean;
  items: {
    itemName: string;
    quantity: number;
    unitPrice: number;
    _id: string;
  }[];
  _id: string;
};
const Orders = () => {
  const { state, dispatch } = useContext(context);
  const cancleOrder = async (id: string) => {
    const data = await axios.put("http://localhost:8000/cancelorder", {
      orderId: id,
    });
    dispatch({ type: "LOGIN", data: data.data });
  };
  if (state.orders.length < 0) {
    return (
      <div>
        <p>You have no orders</p>
        <p>
          start ordering from our delicious menu <Link to={`/menu`}>Here</Link>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        {state.orders.map((item: orderItem) => {
          return (
            <div className="order-items" key={item._id}>
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
                  {item.items.map((subitem) => {
                    return (
                      <tbody key={subitem._id}>
                        <tr key={subitem._id}>
                          <td>{subitem.itemName}</td>
                          <td>{subitem.quantity}</td>
                          <td>{subitem.unitPrice}</td>
                          <td>{subitem.quantity * subitem.unitPrice}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
              <p>
                total order cost is :{" "}
                {item.items.reduce(
                  (total, x) => (total += x.quantity * x.unitPrice),
                  0
                )}
              </p>
              <p>
                order Status :
                {!item.isCancelled ? "Not delivered" : "cancelled"}
              </p>
              {item.isCancelled ? undefined : (
                <button
                  onClick={() => {
                    cancleOrder(item._id);
                  }}
                >
                  Cancel Order
                </button>
              )}
            </div>
          );
        })}
      </div>
    );
  }
};

export default Orders;
