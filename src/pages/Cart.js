//import CartModule from "../components/Cart/CartModule";
import {Fragment} from 'react';
import React,{ lazy,Suspense} from "react";

const CartModule = React.lazy(()=>import("../components/Cart/CartModule"))
const Cart =()=>{
    return(
        <Suspense fallback={<div >Cart is loading</div>}>
            <CartModule/>
        </Suspense>
        
    );
};

export default Cart;