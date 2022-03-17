import { state } from "./Register";
export type action = {
  type: string;
  data: string;
  field: string;
};

const Reducer = (state: state, action: action): state => {
  switch (action.type) {
    case "FIELD":
      return { ...state, [action.field]: action.data };

    default:
      return state;
  }
};
export default Reducer;
