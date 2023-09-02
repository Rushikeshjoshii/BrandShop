import { useNavigate } from "react-router-dom";
import Card from "../Layout/Card";
import classes from './Signup.module.css';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import {useState} from 'react';
import Footer from "../footer/footer";
import { Fragment } from "react";

const Login=()=>{

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);

    const navigate = useNavigate();
     const signupHandler=()=>{
        navigate('/signup');
     };

    const loginHandler=()=>{
        dispatch(authActions.login());
    }

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
       
         //sending signup request
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
        alert(error);
        return;
    }
    else{
        dispatch(authActions.login(data));
        alert("Logged In Successfully.")
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
                    <p>Remeber me</p> 
                    
                </div>
                <p><a>Forgot Password?</a></p>

                <button >Log In</button>
                <button onClick={signupHandler}>Create New Account</button>
            </div>
            {isLoggedIn && <h1>Login Successfull.</h1>}

        </Card>
        </form>
        </Fragment>
        
    )
}

export default Login;