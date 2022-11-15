import axios from "axios";

export async function AxiosRequest(url, method, headers, params) {
  return params
    ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
      })
    : axios({
        url: url,
        method: method, 
        headers: headers,
        data: params,
      });
}

const GetApiDetails = () => {
  const headers = {
    "Content-type": "application/json",
  };
  return AxiosRequest("https://fakestoreapi.com/products", "GET", headers, {});
};

const FetchDetails = (id) => {
  console.log(id);
  const headers = {
    "Content-type": "application/json",
  };
  return AxiosRequest(`https://fakestoreapi.com/products/${id}`, "GET", headers, {});
};

export {
  GetApiDetails,FetchDetails
  
};
