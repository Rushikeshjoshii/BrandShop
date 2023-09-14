import classes from './ShopList.module.css';
import img from '../assets/FireFlex.png'
import { useDispatch } from 'react-redux';
import cartSlice, { cartActions } from '../../store/cart-slice';
import { Dropdown } from 'bootstrap';
import Stack from "@mui/material/Stack";
import {AiFillCloseCircle} from 'react-icons/ai';
import { useState } from 'react';
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from '@mui/material/CircularProgress';
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import React from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ShopList=(props)=>{
    
    const {name,price,image,description,id} = props;

    //snack bar after adding product
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
  
      setOpen(false);
    };

    const dispatch = useDispatch();

    const addToCartHandler = ()=>{
        dispatch(cartActions.addItemToCart({
            id,
            name,
            price,
            image,
        }));

        setOpen(true);
    };

    return(
    <div>
        {open && <div>
        
          <Stack spacing={2} sx={{ width: "100%" }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                    Item Added To Cart.
                </Alert>
            </Snackbar>
          </Stack>
    </div>}
                <div className={classes.card}>
                    <img src={props.image} className={classes.cardimg} alt="product img"/>
                    <div className={classes.cardbody}>
                        <h3 className={classes.cardtitle}>{props.name}</h3>
                        <p className={classes.cardtext}>{props.description}</p>
                        <p>Rs. {props.price}</p>
                        <div className={classes.actions}>
                            <button>BUY NOW</button>
                            <button onClick={addToCartHandler}>Add To Cart</button>
                        </div>
                    </div>
                </div>  
            </div>
    );
}

export  default ShopList;