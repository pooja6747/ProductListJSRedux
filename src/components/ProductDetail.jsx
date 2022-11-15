import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FetchAction } from "../redux/action";
import { useParams } from "react-router-dom";


const ProductDetail = () => {
  const[isLoading , setIsloading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [responseData] = useSelector(({ reducer }) => [reducer.product]);

  useEffect(() => {
    //for action call use useDispatch
    setIsloading(true);
    dispatch(FetchAction(id)).then((res)=>{
      if(res.status === "success"){
        setIsloading(false)
      }
    })
  }, [dispatch]);

  return (
    <>
    {
     isLoading ?<h1>Data loading</h1>: responseData && Object.keys(responseData).length ?  
      <div
        className="container"
       style={{marginTop:"20px"}}
      >
     
     <div className='row' style={{border:"1px solid black"}}>
       <div className='col-md-6 d-flex justify-content-center mx-auto'>
         <img src={responseData?.image} alt={responseData?.title} style={{height:'400px',width:"200px"}}/>
       </div>

       <div className='col-md-6 d-flex flex-column justify-content-center'>
         <h1 className='fw-bold'>{responseData?.title}</h1>
         <hr/>
         <h2>${responseData?.price}</h2>
         <p>{responseData?.category}</p>
      
       </div>
     </div>
   </div>
 :
 <div>
  <h1>No data available</h1>
 </div>
    }
     
    </>
  );
};

export default ProductDetail;
