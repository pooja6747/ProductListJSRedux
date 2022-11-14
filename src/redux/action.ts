
import { GetApiDetails } from "../api/axiosRequest";
import { ActionType} from "./ActionType";
import { Dispatch } from "redux";


interface GetAction{
  type: ActionType.GET_DETAILS,
  payload?: any
}


 export type Action= GetAction;


export const GetApiAction = () => {
  //object return
return function (dispatch:Dispatch<Action> ) {
    return GetApiDetails().then((response) => {
      dispatch({
        type: ActionType.GET_DETAILS,
        payload: response.data,
      });
    });
  };
};



