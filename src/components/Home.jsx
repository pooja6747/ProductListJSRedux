import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetApiAction } from "../redux/action";
import { Link } from "react-router-dom";

const Home = () => {
  const cardStyle = {
    display: "grid",
    gridGap: "20px",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginTop: "20px",
  };
  const [isLoading, setIsloading] = useState(false);
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.reducer.details);

  useEffect(() => {
    //for action call use useDispatch
    setIsloading(true);
    dispatch(GetApiAction()).then((res) => {
      if (res.status === "success") {
        setIsloading(false);
      }
    });
  }, [dispatch]);

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center mb-4" style={cardStyle}>
          {isLoading ? (
            <i class="fa-duotone fa-loader"></i>
          ) : responseData ? (
            responseData.map((product) => {
              const { id, title, image, price, category } = product;
              return (
                <>
                  <Link to={`/detail/${id}`}>
                    <div className="card h-100 text-center p-4" key={id}>
                      <img
                        src={image}
                        className="card-img-top"
                        alt={title}
                        style={{ height: "250px" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title mb-5">{title}</h5>
                        <h5 className="card-title">${price}</h5>
                        <p className="card-text">{category}</p>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Home;
