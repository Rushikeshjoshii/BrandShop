import { Fragment } from "react";
import ShopList from "../components/Shopping/ShopList";
import '.././App.css'

import SHOP_DATA from '../components/ShopData';
import React,{ lazy,Suspense} from "react";

const Shop=()=>{

    //mapping data
    const shopListData = SHOP_DATA.map(item=>
        <ShopList
            id={item.id}    
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
        />
    );
    return(
        <Fragment>
            
            <div className="container">
          
                {shopListData}
            </div>
            
        </Fragment>
    );
};

export default Shop;