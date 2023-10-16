import { Fragment } from "react";
import shoeImg from './assets/shoe_image.png';
import classes from './MainPage.module.css';
import flipkart from './assets/flipkart.png';
import amazon from './assets/amazon.png';
import { useNavigate } from "react-router-dom";

const MainPage=()=>{

    //navigating to shop page on clicking shop now button
    const navigate = useNavigate();
    const shopNavigateHandler = ()=>{
        navigate('/shop');
    }

    return(
        <Fragment>
            <div className={classes.mainPage}>
                <main className={classes.main}>
                    <div className={classes.content}>
                        <h1>YOUR FEET DESERVE THE BEST</h1>
                        <p>
                            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                        </p>

                    <div className={classes.button}>
                        <button onClick={shopNavigateHandler}>Shop Now</button>
                        <button className={classes.second}>Category</button>
                    </div>

                    <div className={classes.available}>
                        <p>Also Available on</p>
                    </div>

                    <div className={classes.shopImages}>
                        <a href="https://www.flipkart.com/mens-footwear/nike~brand/pr?sid=osp,cil"><img src={flipkart} alt="Flipkart logo"/></a>
                        <a href="https://www.amazon.in/s?k=amazon+shoes+for+men+nike&adgrpid=60017109798&ext_vrnc=hi&hvadid=590711865972&hvdev=c&hvlocphy=9301536&hvnetw=g&hvqmt=b&hvrand=11422042204106939442&hvtargid=kwd-315235583720&hydadcr=24966_2265861&tag=googinhydr1-21&ref=pd_sl_7z1cuxz5er_b"><img src={amazon} alt="Amazon logo"/></a>
                    </div>
                    </div>
                    <div className={classes.image}>
                       <img src={shoeImg} alt="shoe image"/>
                    </div>
                </main>
            </div>
            <div className={classes.div2}>
                <h1>RUN YOUR RUN</h1>
                
            </div>
        </Fragment>
    );
};

export default MainPage;