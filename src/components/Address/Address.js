import React, { Fragment } from "react";
import Card from "../Layout/Card";
import classes from './Address.module.css';
import Backdrop from '@mui/material/Backdrop';

const Address =(props)=>{

    return(
        <Fragment>
            <form>
            <Card>
                <div className={classes.container}>
                    <div className={classes.text}>
                        <h1>Shipping Details</h1>   
                    </div>

                    <div className={classes.nameInput}>
                        <section className={classes.name}>
                            <label htmlFor='name'>Name</label>
                            <input 
                                type='name' 
                                placeholder='Enter your name...'
                                
                            />
                            
                        </section>
                        
                        
                        <section className={classes.surname}> 
                            <label htmlFor='surname'>Surname</label>
                            <input 
                                type='name'
                                placeholder='Enter your surname...'
                                
                            /> 
                        </section>     
                    </div>

                    <div className={classes.otherInputs}>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email'
                            placeholder='name@email.com'
                           
                        />
                    </div>
                        
                    <div className={classes.otherInputs}>
                        <label htmlFor='address'>Shipping Address</label>
                        <input 
                            type='text'
                            placeholder='B1-202,Atlanata Society,Wakad,Pune-411057'
                        />
                    </div>
                    <div className={classes.otherInputs}>
                        <label htmlFor='state'>State</label>
                        <input 
                            type='text'
                            placeholder='Maharashtra'
                        />
                    </div>
                    <div className={classes.btn}>
                        <button onClick={props.close}>Order</button>   
                        <button onClick={props.close}>Close</button>
                    </div>
                   
                </div>
            </Card>
            </form>
            
        </Fragment>
        
    );
};

export default Address;