import classes from './ShopList.module.css';
import img from '../assets/FireFlex.png'
import { useDispatch } from 'react-redux';
import cartSlice, { cartActions } from '../../store/cart-slice';
import { Dropdown } from 'bootstrap';


const ShopList=(props)=>{
    
    const {name,price,image,description,id} = props;

    const dispatch = useDispatch();

    const addToCartHandler = ()=>{
        dispatch(cartActions.addItemToCart({
            id,
            name,
            price,
            image,
        }));
    };

    return(
                <div className={classes.card}>
                    <img src={props.image} className={classes.cardimg} alt="product img"/>
                    <div className={classes.cardbody}>
                        <h3 className={classes.cardtitle}>{props.name}</h3>
                        <p className={classes.cardtext}>{props.description}</p>
                        <p>Rs. {props.price}</p>
                        <button className={classes.btn}>BUY NOW</button>
                        <button className={classes.btn} onClick={addToCartHandler}>Add TO Cart</button>
                    </div>
                </div>  
            
    );
}

export  default ShopList;