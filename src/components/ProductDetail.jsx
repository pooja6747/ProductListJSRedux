import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FetchAction,ADD,PostCartAction } from "../redux/action";
import { useParams } from "react-router-dom";


const ProductDetail = () => {
  const [isLoading, setIsloading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [responseData] = useSelector(({ reducer }) => [reducer.product]);

  const state= useSelector((state)=> state.addreducer);
  console.log(state);

  useEffect(() => {
    //for action call use useDispatch
 setIsloading(true);
    dispatch(FetchAction(id)).then((res) => {
      if (res.status === "success") {
        setIsloading(false);
      }
    });
  }, [dispatch]);

const handleCart =()=>{
  //for add 
 dispatch(PostCartAction(responseData));


}

  return (
    <>
      <div className="ui grid container">
     {     isLoading ? (
          <h1>Data loading</h1>
        ) : 
      
        responseData && Object.keys(responseData).length ? (
          <div className="">
            <div className="ui two column statable center aligned grid">
              <div className="middle aligned row">
             
                 <div className="column lp">
                  <img className="ui fluid image" src={responseData?.image} />
                </div> 
                <div className="column rp">
                  <h1>{responseData?.title}</h1>
                  <h2>
                    <a className="ui teal tag label">${responseData?.price}</a>
                  </h2>
                  <h3 className="ui brown block header">
                    {responseData?.category}
                  </h3>
                  <p>{responseData?.description}</p>
                  <div className="ui vertical button" tabIndex="0">
                    {/* <div className="hidden content">
                      <i className="shop icon"></i>
                    </div> */}
                    <div className="visible content" onClick={handleCart}>Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
         </div>
        ) :null
        
             }
      </div>
    
    </>
  );
};

export default ProductDetail;
