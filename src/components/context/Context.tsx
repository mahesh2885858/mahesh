import React, { createContext, Dispatch, FC, useReducer } from "react";
type state = {
  isLoggedIn: boolean;
  name: string;
};
type actionType = {
  data: any;
  type: string;
};
const initialState = {
  isLoggedIn: true,
  name: "mahesh",
};
export const context = createContext<any>({});
const Reducer = (state: state, action: actionType): state => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true };

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
