import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const CartBtn = () => {
    const state= useSelector((state)=> state.addreducer._products);


  return (<>
     <Link to="/" className='btn btn-outline-primary ms-2'>
            <span className='fa fa-shopping-cart me-1'></span><i class="fa-solid fa-cart-shopping-fast"></i>{state.length}
        </Link>
  </>
    
  )
}

export default CartBtn