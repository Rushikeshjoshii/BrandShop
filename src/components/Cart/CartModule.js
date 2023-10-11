import {useSelector } from "react-redux";
import Card from "../Layout/Card";
import CartItem from "./CartItem";
import classes from './CartModule.module.css'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import React from "react";
import { Fragment } from "react";
import Address from "../Address/Address";

const CartModule=()=>{
    //Address Backdrop Component
    const [open, setOpen] = React.useState(false);
    const [IsorderPlaced,setIsOrderPlaced]=React.useState(false);

    const handleClose = () => {
      setOpen(false);
      setIsOrderPlaced(false);
      
    };
    const handleOpen = () => {
      setOpen(true);
      setIsOrderPlaced(true);
    };
    
    //Address Backdrop Component
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
                    return;
                }
                setOpen(true);
            }
           else{
            alert('Before Check Out You Must Login First.');
           }
        };
        
   

    return(
    <Fragment>
            <div className={classes.flex}>
                <div className={classes.card}>
                    <div className={classes.cartPage} >
                        <div className={classes.title}>
                            <h2>Your Cart Items</h2> 
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
                        <h3>Total</h3>
                        <h3>Rs.{finalPrice}</h3>
                    </div>
                    {isLoggedIn && <button className={classes.cartBtn} onClick={CheckOutHandler}>Proceed To Checkout</button>}
                    {!isLoggedIn && <p>Please Login to Continue</p>}   
                        </div>
                    </div>
            </div>
            {open && <div>
             
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <Address close={handleClose} open={handleOpen}/>
                </Backdrop>
            </div>}
            {IsorderPlaced && <div>
             
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={IsorderPlaced}
                    onClick={handleClose}
                >
                </Backdrop>
             </div>}
            </Fragment>
    );
};

export default CartModule;