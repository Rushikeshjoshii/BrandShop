import { Fragment } from 'react';
import classes from './footer.module.css';

const Footer =()=>{
    return(
        <Fragment>
            <div className={classes.footer}>
                <div className={classes.column}>
                    <h3>About Us</h3>
                    <a href='#'>Aim</a>
                    <a href='#'>Vision</a>
                </div>
                <div className={classes.column}>
                    <h3>Social Media</h3>
                    <a href='#'>Faceook</a>
                    <a href='#'>Instagram</a>
                </div>
                <div className={classes.column}>
                    <h3>Contact</h3>
                    <a href='#'>Delhi</a>
                </div>
                
            </div>
            <div  className={classes.copyright}>
                <h3>@Copyright : Brand-Home.com</h3>
            </div>
            
        </Fragment>
    );
};

export default Footer;