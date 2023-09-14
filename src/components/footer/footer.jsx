import { Fragment } from 'react';
import classes from './footer.module.css';
import {FaTwitter} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {FaFacebookSquare} from 'react-icons/fa';

const Footer =()=>{
    return(
        <Fragment>
            <div className={classes.footer}>
                <div className={classes.column}>
                    <FaTwitter/>
                    <AiFillInstagram/>
                    <FaFacebookSquare/>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;