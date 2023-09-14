import { Fragment } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";
import { useState } from "react";


const RootLayout=()=>{
    const [isVisible,setIsVisible]=useState(true);

    
  
    return(
        <Fragment>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
           {isVisible &&  <Footer/>}
        </Fragment>
    );
};

export default RootLayout;