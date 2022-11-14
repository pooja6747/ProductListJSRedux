import { ActionType } from "../ActionType";
//import { Action } from "../action";

const initialState = {
  details: [],
  product : []
};

//initialState(state) means information show on browser
// interface Action{
//   payload: any;
//   type: any;
//   title: any;
//    image: any;
//     price: any;
//      category: any;
// }
//action reducer
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_DETAILS:
      return {
        details: action.payload,
      };

    default:
      return state;
  }
};



