import {Reducer} from "./reducer";
import { combineReducers } from "redux";
import store from "../store";





//if more reducer available then combine with combineReducer
const RootReducer = combineReducers({
  reducer: Reducer
});

export default RootReducer;

// export type State = ReturnType<typeof store.getState>
export type State = ReturnType<typeof RootReducer>
