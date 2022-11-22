
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartBtn = () => {
  const state = useSelector((state) => state.addreducer?.sum);
  
  return (
    <>
      <Link to="/detail" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"></span>Cart {state}
      </Link>
    </>
  );
};

export default CartBtn;
