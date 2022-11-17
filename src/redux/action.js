import { FetchDetails, GetApiDetails, AddtoCart } from "../api/axiosRequest";
import { GET_DETAILS, SELECTED_PRODUCT, ADD_ITEM } from "./type";

export const GetApiAction = () => {
  //object return
  return function (dispatch) {
    return GetApiDetails().then((response) => {
      dispatch({
        type: GET_DETAILS,
        payload: response.data,
      });
      //for loader
      return { status: "success" };
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
      return { status: "success" };
    });
  };
};

export const PostCartAction = (request) => {
  console.log(request);
  return function (dispatch) {
    return AddtoCart(request).then((response) => {
      console.log(response);

      dispatch({
        type: ADD_ITEM,
        payload: response.data,
      });
    });
  };
};

// let dummyData =[{id:1 , item:"item1" , image:require("../assests/o2.jpg")}]