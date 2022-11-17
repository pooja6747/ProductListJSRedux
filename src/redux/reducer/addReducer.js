import { ADD_ITEM, DELETE_ITEM } from "../type";

const initialState = {
  _products: [],
};

const AddReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,

        _products: [...state._products, action.payload],
      };

    default:
      return state;
  }
};

export default AddReducer;
