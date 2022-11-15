import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { GetApiAction } from "../redux/action";
import { Link } from "react-router-dom";


const Home = () => {
  const[isLoading , setIsloading] = useState(false);
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.reducer.details);

  useEffect(() => {
    //for action call use useDispatch
    setIsloading(true);
    dispatch(GetApiAction()).then((res)=>{
      if(res.status === "success"){
        setIsloading(false)
      }
    })
  }, [dispatch]);

  return (
    <>
   
      <div
        className="container"
        style={{
          display: "grid",
          gridGap: "20px",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "400px 400px 450px",
          width: "100%",
          marginTop:"20px"
        }}
      >
       {/* <Header/> */}
    
        {isLoading ?<h1>Data loading</h1>: responseData
          ? responseData.map((product) => {
              const {id, title, image, price, category } = product;
              return (
                <>
                <Link to={`/detail/${id}`}>
                  <div className="card" key={id}>
                    <img
                      src={image}
                      className="card-img-top"
                      alt={title}
                      style={{ height: "250px", width: "300px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <h5 className="card-title">${price}</h5>
                      <p className="card-text">{category}</p>
                    </div>
                  </div>
                 
                 
                  </Link>
                </>
              );
            })
          : null}
         

      </div>
    </>
  );
};

export default Home;
