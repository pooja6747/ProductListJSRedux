import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../redux/action";
import DATA from "./Data";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  const handleAddCart = (id, name, img, price) => {
    let newCart = [...cart];
    if (newCart.some((i) => i.id === id)) {
      let itemIndex = newCart.findIndex((i) => i.id === id);

      newCart[itemIndex]["count"] = cart[itemIndex]["count"] + 1;
    } else {
      newCart.push({ id: id, count: 1, name: name, img: img, price: price });
    }

    setCart([...newCart]);
    setShow(true);
  };

  const handleRemoveCart = (id) => {
    let newCart = [...cart];
    if (newCart.some((i) => i.id === id)) {
      let itemIndex = newCart.findIndex((i) => i.id === id);
      newCart[itemIndex]["count"] =
        cart[itemIndex]["count"] === 0 ? 0 : cart[itemIndex]["count"] - 1;
    } else {
      newCart.push({ id: id, count: 1 });
    }

    setCart([...newCart]);

    //count 0
    const filteredCount = cart.filter((element, index) => {
      return element.count >= 1;
    });
    setCart(filteredCount);
  };

  const handleCart = (item) => {
    //for add
    dispatch(addtoCart(item));

    const filteredCart = cart.filter((element, index) => {
      return element.id !== item.id;
    });
    setCart(filteredCart);
  };

  const cardStyle = {
    marginTop: "50px",
    marginBottom:"10px"
  };
  return (
    <>
      <div className="container my-2 py-2">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>

            <div class="row">
              <div
                className={`row justify-content-around ? col-sm-8 col-md-8 col-lg-8" : "col-sm-4 col-md-4 col-lg-4"}`}
              >
                {loading ? (
                  <h1>Data loading</h1>
                ) : DATA ? (
                  <>
                    {DATA.map((item, index) => {
                      let cartIndex = cart?.findIndex((i) => i.id === item.id);
                      return (
                        <>
                          <div
                            className="card my-5 py-4"
                            key={item.id}
                            style={{ width: "18rem" }}
                          >
                            <img
                              src={item.img}
                              className="card-img-top"
                              alt={item.title}
                            />
                            <div className="card-body text-center">
                              <h5 className="card-title">{item.title}</h5>
                              <p className="lead">${item.price}</p>
                              <span
                                class="btn btn-outline-primary"
                                onClick={() => handleRemoveCart(item.id)}
                              >
                                -
                              </span>{" "}
                              <span>{cart[cartIndex]?.count} </span>{" "}
                              <span
                                className="btn btn-outline-primary"
                                onClick={() =>
                                  handleAddCart(
                                    item.id,
                                    item.title,
                                    item.img,
                                    item.price
                                  )
                                }
                              >
                                +
                              </span>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </>
                ) : null}
              </div>

              <div className="col-sm-4 col-md-4 col-lg-4" style={cardStyle}>
                {show ? (
                  <>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                      <div>
                        {cart.map((item) => {
                          return (
                            <>
                              <div
                                className="card cart"
                                style={{ height: "150px", width: "120px" }}
                              >
                                <img
                                  src={item.img}
                                  alt={item.title}
                                  style={{ height: "60px", width: "120px" }}
                                />
                                <div class="card-body text-center">
                                  <h5 class="card-title">{item.name}</h5>
                                  <p className="card-title">
                                    Count: {item.count}
                                  </p>
                                  <p className="card-title">
                                    Price: {item.price}
                                  </p>
                                </div>
                              </div>

                              <button
                                className="btn btn-primary"
                                onClick={() => handleCart(item)}
                                style={{ marginTop: "5px" }}
                              >
                                ADD to cart
                              </button>
                            </>
                          );
                        })}

                        <p style={{ marginTop: "5px" }}>
                          {" "}
                          Total price{" "}
                          <span>
                            {cart
                              .map((item) => item.price * item.count)
                              .reduce((total, value) => total + value, 0)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
