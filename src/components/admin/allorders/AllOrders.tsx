import React, { useContext, useEffect } from "react";
import { context } from "../../context/Context";
import axios from "axios";
const AllOrders = () => {
  const { state, dispatch } = useContext(context);
  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const orders = await axios.get(
          "http://localhost:8000/admin/getallorders"
        );
        const ordersArray = orders.data.map((item: any) => {
          const order = item.orders.map((item1: any) => {
            return item1;
          });
          return order;
        });
        console.log(ordersArray);
        dispatch({ type: "GET_ALL_ORDERS", data: ordersArray });
      } catch (err) {
        console.log(err);
      }
    };
    getAllOrders();
  }, []);
  return (
    <div>
      {state.allOrders.map((item: any) => {
        return (
          <div key={Math.random()}>
            {item.map((order: any) => {
              return (
                <div key={order._id}>
                  <div>a;lsdkfjlasjf</div>
                  <div>
                    {order.items.map((item2: any) => {
                      return <div key={item2._id}>maheslasjfk</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default AllOrders;
