import { useNavigate } from "react-router-dom";
import Card from "../Layout/Card";
import classes from './Signup.module.css';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import {useState} from 'react';
import { Fragment } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
const Login=()=>{

     //modal 
     const [open, setOpen] = useState(false);
     const [error,setError] = useState(false);
 
     const handleClose = () => {
         setOpen(false);
         navigate('/Shop')
       };
     
       const handleDialogClose = () => {
         setOpen(false);
       };

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
    const [isModalShown,setIsModalShown]=useState(false);
    
    const navigate = useNavigate();
     const signupHandler=()=>{
        navigate('/signup');
     };

    //validation
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
 
    const[inputEmailIsValid,setInputEmailIsValid]=useState(true);
    const[isTouched,setIsTouched]=useState(true);


   //validation logic
    const onEmailChangeHandler=(event)=>{
        setEmail(event.target.value);
        if(event.target.value==='' || !event.target.value.includes('@'))
        {
            setInputEmailIsValid(false);
        }
        setInputEmailIsValid(true);
       
    };

    const onEmailBlurHandler=(event)=>{
        setIsTouched(true);
        if(event.target.value==='' || !event.target.value.includes('@'))
        {
            setInputEmailIsValid(false);
        }

    };

    const onPasswordChangeHandler=(event)=>{
        setPassword(event.target.value);
    };
    
    const formSubmitHandler =async (event)=>{
        event.preventDefault();
       
         //sending login request
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDGVtv0F72OUbRWApVm-Gd8-4dOF62Gal4',{
        method : 'POST',
        body :JSON.stringify({
            email:email,
            password:password,
            returnSecureToken:true
        }),
        headers : {
            'Content-Type' : 'application/json'
          }
    });

    const data = await response.json();
   
    if(!response.ok)
    {
        const error=data.error.message;
        //alert(error);
        setOpen(true);
        setError(true);
        
    }
    else{
        
        dispatch(authActions.login(data));
        setOpen(true);
        setEmail('');
        setPassword('');
        
    }
    
    }

    return(
        <Fragment>
        <form onSubmit={formSubmitHandler}>
            <Card>
            <div className={classes.container}>
                <div className={classes.text}>
                    <h1>Welcome to Nike!</h1>   
                    <p>Enter your credentials to access the account.</p>
                </div>
                <div className={classes.otherInputs}>
                    <label htmlFor='email'>Email</label>
                    <input 
                        type='email' 
                        placeholder='name@email.com' 
                        value={email} 
                        onChange={onEmailChangeHandler} 
                        onBlur={onEmailBlurHandler}
                    />
                    {!inputEmailIsValid && <p className={classes.errorText}>Please Enter Valid Email Address.</p>}
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password' 
                        placeholder='**************'
                        value={password}
                        onChange={onPasswordChangeHandler}
                    />
                </div>

                <div className={classes.checkbox}>
                    <input type='checkbox'/>
                    <p>Remember Me</p> 
                    
                </div>
                <p><a>Forgot Password?</a></p>

                <button>Log In</button>
                <button onClick={signupHandler}>Create New Account</button>
            </div>

        </Card>
        </form>
        {open && 
                <div>
                <Backdrop
                  sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open={open}
                  onClick={handleClose}
                >
                  <div>
                    <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleDialogClose}
                      aria-describedby="alert-dialog-slide-description"
                    >
                     { !error && <DialogTitle>{"Welcome Back"}</DialogTitle>}

                     { error && <DialogTitle>{"Failed to Login"}</DialogTitle>}

                     {!error&&  <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {"Login Successful.Continue With Shopping."}
                        </DialogContentText>
                      </DialogContent>}

                      {error&&  <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Something Went Wrong.Try Logging in Again.
                        </DialogContentText>
                      </DialogContent>}
                      <DialogActions>
                        <Button onClick={handleClose}>OKay</Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </Backdrop>
              </div>
            }
        </Fragment>
        
    )
}

export default Login;