import React, { createContext, Dispatch, FC, useReducer } from "react";
import ContextReducer from "./ContextReducer";
export type state = typeof initialState;

export type actionType = {
  data: any;
  type: string;
};
const initialState = {
  isLoggedIn: false,
  isAdminLoggedIn: false,
  name: "",
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
  orders: [],
};
export const context = createContext<any>({});

const ContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(ContextReducer, initialState);
  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};
export default ContextProvider;
