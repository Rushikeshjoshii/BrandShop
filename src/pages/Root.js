import { Fragment } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";

const RootLayout=()=>{
    
    return(
        <Fragment>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </Fragment>
    );
};

export default RootLayout;