import { GET_DETAILS, SELECTED_PRODUCT } from "../type";


const initialState = {
  details : [],
  product : []
};


//initialState(state) means information show on browser

//action reducer
const Reducer = (state = initialState, action) => {
  console.log("Action",action);
  switch (action.type) {
    case GET_DETAILS:
      return {
        details: action.payload,
      };
      case SELECTED_PRODUCT:
    return {
      ...state,
      product : action.payload
    };
    default:
      return state;
  }
};

export {Reducer} ;
