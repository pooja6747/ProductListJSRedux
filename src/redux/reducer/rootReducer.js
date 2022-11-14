import Reducer from "./reducer";
import { combineReducers } from "redux";



//if more reducer available then combine with combineReducer
const RootReducer = combineReducers({
  reducer: Reducer,
});

export default RootReducer;
