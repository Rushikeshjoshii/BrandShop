import { useRef, useState } from 'react';
import Button from './Button';
import classes from './EmailForm.module.css';
import {GiConfirmed} from 'react-icons/gi';

const EmailForm  =()=>{

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [text,setText]=useState('');

    const nameInputChangeHandler=(event)=>{
        setName(event.target.value);
    };

    const emailInputChangeHandler=(event)=>{
        setEmail(event.target.value);
    };

    const textInputChangeHandler=(event)=>{
        setText(event.target.value);
    };
    //submitting user contact details to DB
     const formSubmitHandlder= async (event)=>{
        event.preventDefault();
        console.log(name,email,text);

        //creating objct to send to DB
        const user = {
            name,
            email,
            text
        };
        //Sending data to firbase API
        const response = await fetch('https://react-http-2a1c1-default-rtdb.firebaseio.com/userContact.json',{
            method:'POST',
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        if(!response.ok)
        {
            alert("Failed to connect Backend!!!");
        }
        
        alert("Contacted SUccessfully!!!")


        //clearing form
        setName('');
        setEmail('');
        setText('');
    };

    return(
        <form onSubmit={formSubmitHandlder}>
            <div className={classes.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={nameInputChangeHandler} value={name} ></input>
            </div>

            <div className={classes.form_control}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"  onChange={emailInputChangeHandler} value={email}></input>
            </div>

            <div className={classes.form_control}>
                <label htmlFor="text">Text</label>
                <textarea name='text' onChange={textInputChangeHandler} value={text}/>
            </div>
            <div className={classes.form_control}>
                <Button><GiConfirmed/>SUBMIT</Button>
            </div>
        </form>
    );
};

export default EmailForm;