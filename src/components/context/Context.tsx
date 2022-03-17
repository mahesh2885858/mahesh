import React, { createContext, Dispatch, FC, useReducer } from "react";
type state = typeof initialState;

type actionType = {
  data: any;
  type: string;
};
const initialState = {
  isLoggedIn: true,
  name: "mahesh",
  menu: [
    {
      name: "Dosa",
      unitPrice: 20,
      quantity: 0,
      _id: "123",
    },
    {
      name: "Idly",
      unitPrice: 30,
      quantity: 0,
      _id: "1234",
    },
    {
      name: "Vada",
      unitPrice: 10,
      quantity: 0,
      _id: "asf",
    },
  ],
};
export const context = createContext<any>({});
const Reducer = (state: state, action: actionType): state => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true };
    // to increase the order count
    case "INCREASE":
      const newMenu = state.menu.map((item) => {
        if (item._id === action.data) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      return { ...state, menu: newMenu };
    // to decrease the order count
    case "DECREASE":
      const newMenu1 = state.menu.map((item) => {
        if (item._id === action.data) {
          if (item.quantity > 0)
            return { ...item, quantity: item.quantity - 1 };
          else {
            return item;
          }
        } else {
          return item;
        }
      });
      return { ...state, menu: newMenu1 };
    //  to set the menu on refresh
    case "SET_MENU":
      return { ...state, menu: action.data };
    default:
      return state;
  }
};

const ContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};
export default ContextProvider;
