import React from "react";
import logo from './assets/brand_logo.png'
import { Link, NavLink, useNavigate } from "react-router-dom";
import classes from './Navbar.module.css';
import {HiShoppingCart} from 'react-icons/hi';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";


const Navbar = ()=>{

    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const loginNavigateHandler=()=>{
        navigate('/login');
    }

    const logoutHandler=()=>{
        dispatch(authActions.logout());
    }
    return(
        
            <nav>
                <Link to='/'><a><img src={logo} alt="Logo"/></a></Link>

                <ul className={classes.list}>
                     <li>
                        <NavLink to='/home'  className={({isActive})=> isActive?classes.active:undefined}>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop'  className={({isActive})=> isActive?classes.active:undefined}>SHOP</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'  className={({isActive})=> isActive?classes.active:undefined}>ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({isActive})=> isActive?classes.active:undefined}>CONTACT</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/cart' className={({isActive})=> isActive?classes.active:undefined}>{HiShoppingCart}</NavLink>
                        
                    </li>
                </ul>
                <ul>
                    <li>
                        {!isLoggedIn && <button onClick={loginNavigateHandler}>Login</button>}
                        {isLoggedIn && <button onClick={logoutHandler} >Logout</button>}
                    </li>
                </ul>              
                
            </nav>
            
       
    );
};

export default Navbar;