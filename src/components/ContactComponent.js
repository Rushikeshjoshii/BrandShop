
import { Fragment, useState } from 'react';
import Button from './Button';
import classes from './ContactComponent.module.css';
import {BiSolidMessageSquareDetail} from 'react-icons/bi';
import {FiPhone} from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi';
import EmailForm from './EmailForm';

const ContactComponent=()=>{

    const [showForm,setShowForm] = useState(false);
    const showEmailFormHandler=()=>{
        setShowForm(true);
    };


    return(
        <Fragment>
        <div className={classes.box}>
            <main className={classes.main}>
                <h1>CONTACT US</h1>
                <p>
                    LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. 
                </p>
                <div>
                    <label></label>
                </div>

            </main>
            
            { showForm && 
                <div >
                    <EmailForm/>
                </div>
            }
            
            {!showForm && <div className={classes.form}>
                    <Button>
                        <BiSolidMessageSquareDetail/>
                        VIA SUPPORT CHAT
                    </Button>
                    <Button>
                        <FiPhone/>
                        VIA CALL
                    </Button>
                    <Button isOutline={true} onClick={showEmailFormHandler}>
                        <HiOutlineMail/>
                        VIA EMAIL FORM
                    </Button>
                </div>}
            </div>
        </Fragment>
    );
};

export default ContactComponent;