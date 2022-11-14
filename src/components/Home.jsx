import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetApiAction } from "../redux/action";

const Home = () => {
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.reducer.details);

  useEffect(() => {
    //for action call use useDispatch
    dispatch(GetApiAction());
  }, [dispatch]);

  return (
    <>
      <div
        className="container"
        style={{
          display: "grid",
          gridGap: "20px",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "400px 400px 400px",
          width: "100%",
        }}
      >
        {responseData
          ? responseData.map((product, index) => {
              const { title, image, price, category } = product;
              return (
                <>
                  <div className="card" key={index}>
                    <img
                      src={image}
                      className="card-img-top"
                      alt="title"
                      style={{ height: "250px", width: "300px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <h5 className="card-title">${price}</h5>
                      <p className="card-text">{category}</p>
                    </div>
                  </div>
                </>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Home;
