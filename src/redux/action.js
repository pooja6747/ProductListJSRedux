import { FetchDetails, GetApiDetails } from "../api/axiosRequest";
import { GET_DETAILS, SELECTED_PRODUCT } from "./type";

export const GetApiAction = () => {
  //object return
  return function (dispatch) {
    return GetApiDetails().then((response) => {
      dispatch({
        type: GET_DETAILS,
        payload: response.data,
      });
    });
  };
};

export const FetchAction = (id) => {
  return function (dispatch) {
    return FetchDetails(id).then((response) => {
      dispatch({
        type: SELECTED_PRODUCT,
        payload: response.data,
      });
    });
  };
};
