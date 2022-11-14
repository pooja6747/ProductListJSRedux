import axios from "axios";

export async function AxiosRequest(url: string, method: string, headers: { "Content-type": string; }, params: {}) {
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

// const ProductDetails = (id) => {
//   const headers = {
//     "Content-type": "application/json",
//   };
//   return AxiosRequest(`https://fakestoreapi.com/products/${id}`, "GET", headers, {});
// };

export {
  GetApiDetails,
  
};
