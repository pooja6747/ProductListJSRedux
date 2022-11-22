import { ADD_ITEM, REMOVE_CART } from "../type";

const initialState = {
  numberCart: 0,
  sum: 0,
  Carts: [],
};

const AddReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      if (state.numberCart === 0) {
        let cart = {
          id: action.payload.id,
          quantity: action.payload.count,
          img: action.payload.img,
          name: action.payload.name,
          price: action.payload.price,
        };
        state.Carts.push(cart);
      }

      return { ...state, sum: state.sum + action.payload.count };

      break;

    case REMOVE_CART:
      const cartItem = state.Carts.filter(
        (item) => item.id !== action.payload.id
      );
      return (state.Carts = cartItem);

    default:
      return state;
  }
};

export default AddReducer;
