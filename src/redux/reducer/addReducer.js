import { ADD_ITEM } from "../type";

const initialState = {
  numberCart: 0,
  sum: 0,
  Carts: [],
};

const AddReducer = (state = initialState, action) => {
  console.log("state",state.sum, "count",action.count);
  switch (action.type) {
    case ADD_ITEM:
      if (state.numberCart === 0) {
        let cart = {
          id: action.id,
          quantity: action.count,
        };
        state.Carts.push(cart);
      }

      return { ...state, sum: state.sum + action.count };

      break;
    default:
      return state;
  }
};

export default AddReducer;
