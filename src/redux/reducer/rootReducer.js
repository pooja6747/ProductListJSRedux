import { Reducer } from "./reducer";
import AddReducer from "./addReducer";
import { combineReducers } from "redux";

//if more reducer available then combine with combineReducer
const RootReducer = combineReducers({
  reducer: Reducer,
  addreducer: AddReducer,
});

export default RootReducer;
