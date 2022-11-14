
import { GetApiDetails } from "../api/axiosRequest";
import { GET_DETAILS } from "./type";





export const GetApiAction = () => {
  //object return
return function (dispatch ) {
    return GetApiDetails().then((response) => {
      dispatch({
        type: GET_DETAILS,
        payload: response.data,
      });
    });
  };
};




