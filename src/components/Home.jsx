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
      <div className="card-container" style={cardStyle}>
        {isLoading ? (
          <h1>Data loading</h1>
        ) : responseData ? (
          responseData.map((product) => {
            const { id, title, image, price, category } = product;
            return (
              <>
                {/* <Link to={`/detail/${id}`}>
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
                 
                 
                  </Link> */}

               <div className="four wide column" key={id}>
                  <Link to={`/detail/${id}`}>
                    <div className="ui link cards">
                      <div className="card">
                        <div className="image">
                          <img src={image} alt={title} />
                        </div>
                        <div className="content">
                          <div className="header">{title}</div>
                          <div className="meta price">$ {price}</div>
                          <div className="meta">{category}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div> 

                {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
              </>
            );
          })
        ) : null}
      </div>
    </>
  );
};

export default Home;
