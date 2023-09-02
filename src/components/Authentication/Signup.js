import Card from '../Layout/Card';
import classes from './Signup.module.css';
import { Link, NavLink, useNavigate } from "react-router-dom";
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import {CgProfile} from 'react-icons/cg';

const Signup=()=>{

   const navigate=useNavigate();

   const dispatch = useDispatch();
   
   const [name,setenteredName]=useState('');
   const [surname,setenteredSurname]=useState('');
   const [email,setenteredEmail]=useState('');
   const [password,setenteredPassword]=useState('');
   const [confirmPass,setenteredConfirmPass]=useState('');
   const [isChecked,setIsChecked]=useState(false);

   const [inputNameIsValid,setInputNameIsValid]=useState(true);
   const [inputEmailIsValid,setInputEmailIsValid]=useState(true);
   const [isUserTouchedName,setIsUserTouchedName]=useState(false);
   const [isPasswordMatch,setIsPasswordMatch]=useState(true);

   const nameInputChangeHandler = (event) => {
        setenteredName(event.target.value);   

        if(event.target.value.trim()!=='')
        {
            setInputNameIsValid(true);
        }
   };

   const emailInputChangeHandler = (event) => {
        setenteredEmail(event.target.value);   

        if(event.target.value.includes('@') && event.target.value.trim()!=='')
        {
            setInputEmailIsValid(true);
        }
   };

   const onNameBlurHandler=(event)=>{
    setIsUserTouchedName(true);
    if(name.trim()==='')
    {
      setInputNameIsValid(false);
      
    }
 
  };
  const onEmailBlurHandler=(event)=>{
    setIsUserTouchedName(true);
    if(!email.includes('@') && email.trim()!=='')
    {
        setInputEmailIsValid(false);
    }
    
  };

  const passwordInputHandler=(event)=>{
    setenteredPassword(event.target.value);
  };

  const confirmPassInputHandler=(event)=>{
    setenteredConfirmPass(event.target.value);
    
    if(password===event.target.value)
    {
        setIsPasswordMatch(true);
        return;
    }
    setIsPasswordMatch(false);
    
  };

  //checkbox
  const checkBoxHandler=(event)=>{
    setIsChecked(!isChecked);
  };

  //form submit handler
  const formSubmitHandler=async (event)=>{
    event.preventDefault();
    setIsUserTouchedName(true);

    if(name.trim()==='')
    {
        setInputNameIsValid(false);
        return;
    }
    setInputNameIsValid(true);

    if(!email.includes('@') || email.trim()==='')
    {
        setInputEmailIsValid(false);
        return;
    }
    setInputEmailIsValid(true);

    if(password!==confirmPass)
    {
        setIsPasswordMatch(false);
        return;
    }
    setIsPasswordMatch(true);

    //sending signup request
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDGVtv0F72OUbRWApVm-Gd8-4dOF62Gal4',{
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
    }
    
    else{
        //pushing token data to Redux store
        dispatch(authActions.signup(data.idToken))
        // console.log(data.idToken);
        alert("Successfully registered.");
        setenteredName('');
        setenteredEmail('');
        setenteredPassword('');
        setenteredConfirmPass('');
        navigate('/login');
    }
    
    
  }


    return(
        <form onSubmit={formSubmitHandler}>
             <Card>
            <div className={classes.container}>
                <div className={classes.text}>
                    <h1>Welcome to Nike!</h1>   
                    <p>Create a free account by filling data below.</p>
                </div>

                <div className={classes.nameInput}>
                    <section className={classes.name}>
                        <label htmlFor='name'>Name</label>
                        <input 
                            type='name' 
                            placeholder='Enter your name...'
                            value={name} 
                            onChange={nameInputChangeHandler}
                            onBlur={onNameBlurHandler}   
                        />
                        {!inputNameIsValid && <p className={classes.errorText}>Name field Can't Empty.</p>}
                    </section>
                    
                    
                    <section className={classes.surname}> 
                        <label htmlFor='surname'>Surname</label>
                        <input 
                            type='name'
                            placeholder='Enter your surname...'
                            value={surname}
                        /> 
                    </section>     
                </div>

                <div className={classes.otherInputs}>
                    <label htmlFor='email'>Email</label>
                    <input 
                        type='email'
                        placeholder='name@email.com'
                        value={email}
                        onChange={emailInputChangeHandler}
                        onBlur={onEmailBlurHandler}
                    />
                    {!inputEmailIsValid && <p className={classes.errorText}>Please Enter Valid Email.</p>}
                    
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password' 
                        placeholder='**************'
                        value={password}
                        onChange={passwordInputHandler}
                    />
                    <label htmlFor='password'>Confirm Password</label>
                    <input 
                        type='password' 
                        placeholder='**************'
                        value={confirmPass}
                        onChange={confirmPassInputHandler}
                    />
                    {!isPasswordMatch && <p className={classes.errorText}>Password is not Matching.</p>}
                </div>

                <div className={classes.checkbox}>
                    <input type='checkbox'value={isChecked} onChange={checkBoxHandler}/>
                    <p>I agree with Terms & Conditions.</p> 
                    {!isChecked && <p className={classes.errorText}>You must agree with Terms & Conditions to continue.</p>}
                </div>
                    {isChecked && <button><CgProfile/>Create Account</button>}
                <div>
                    <p className={classes.bottomtext}>Already have an account?<Link to='/login' className={classes.Link}>Log In</Link> </p>
                </div>
                    
            </div>
        </Card>
        </form>
       

    );
}

export default Signup;