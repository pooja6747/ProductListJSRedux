import { useSelector } from "react-redux";

const CartDetail = () => {
  const state = useSelector((state) => state.addreducer?.Carts);

  return (
    <>
      <div className="row">
        <div
          className={`row justify-content-around ? col-sm-8 col-md-8 col-lg-8" : "col-sm-4 col-md-4 col-lg-4"}`}
        >
          {state.map((item, index) => {
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
                    alt={item.quantity}
                  />
                  <div className="card-body text-center">
                    <p className="lead">Price: ${item.price}</p>
                    <p className="lead">Items: {item.quantity}</p>
                  </div>
                </div>
              </>
            );
          })}

          <h2 style={{ marginTop: "5px" }}>
            {" "}
            Total Price:{" "}
            <span>
              {state
                .map((item) => item.price * item.quantity)
                .reduce((total, value) => total + value, 0)}
            </span>
          </h2>

          <button className="btn btn-primary" style={{ marginTop: "5px" }}>
            Proceed to buy
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDetail;
