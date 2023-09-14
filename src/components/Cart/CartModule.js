import {useSelector } from "react-redux";
import Card from "../Layout/Card";
import CartItem from "./CartItem";
import classes from './CartModule.module.css'
import { Fragment } from "react";
import {BsFillCreditCardFill} from 'react-icons/bs';

const CartModule=()=>{

   
    const cartItems = useSelector(state=>state.cart.items);
    const finalPrice = useSelector(state=>state.cart.finalPrice);
    const cart = useSelector(state=>state.cart);
    const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
  
   
    //sendig cart datay
        const CheckOutHandler= async ()=>{
        
            
            if(isLoggedIn)
            {

                const response = await fetch('https://brand-home-cart-data-default-rtdb.firebaseio.com/cart.json',
                {
                    method : 'PUT',
                    body : JSON.stringify(cart),
                }
            );

                if(!response.ok)
                {
                    throw new Error("Sending Cart Data Failed.");
                }
            }
           else{
            alert('Before Check Out You Must Login First.');
           }
        };
        
   

    return(
        <div className={classes.flex}>
        <div className={classes.card}>
        <div className={classes.cartPage} >
            <div className={classes.title}>
                <h1>Your Cart Items</h1> 
            </div>
            
            <ul>
                {
                    cartItems.map(item=>
                        <CartItem
                            key={item.id}
                            item={{
                                id: item.id,
                                name: item.name, 
                                quantity: item.quantity, 
                                total: item.totalPrice, 
                                price: item.price,
                                image: item.image
                            }}
                        />    
                    )
                }
            </ul>
            <div className={classes.totalCart}>
                <h2>Total</h2>
                <h2>Rs.{finalPrice}</h2>
            </div>
            {isLoggedIn && <button className={classes.cartBtn} onClick={CheckOutHandler}>Proceed To Checkout</button>}
            {!isLoggedIn && <p>Please Login to Continue</p>}   
        </div>
        </div>
        
        </div>
    );
};

export default CartModule;