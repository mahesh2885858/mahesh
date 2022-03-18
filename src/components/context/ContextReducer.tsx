import { state, actionType } from "./Context";

const Reducer = (state: state, action: actionType): state => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        name: action.data.username,
        orders: action.data.orders,
      };
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
    case "LOGOUT":
      return { ...state, isLoggedIn: false, name: "", orders: [] };
    case "CLEAR_CART":
      const clearedMenu = state.menu.map((item) => {
        return { ...item, quantity: 0 };
      });
      return { ...state, menu: clearedMenu };
    default:
      return state;
  }
};
export default Reducer;
