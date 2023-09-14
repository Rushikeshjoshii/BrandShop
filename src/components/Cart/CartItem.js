
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartItem = (props) =>{
    const { name, quantity, total, price ,id,image } = props.item;

    const dispatch = useDispatch();

    const totalPrice=useSelector(state=>state.cart.totalPrice);
   
  const addItemHandler=()=>{
    dispatch(cartActions.addItemToCart({
      id,
      name,
      price,
    }));
  }

  const removeItemHandler=()=>{
    dispatch(cartActions.removeItemFromCart(id));

  }
    return(
    <li className={classes.item}>
      <img src={image} alt="Product Image" />
      <header>
        <h4>{name}</h4>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
           <span>Rs.{price}x{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>+</button>
          <button onClick={removeItemHandler}>-</button>
        </div>
      </div>
    </li>
    );
};

export default CartItem;