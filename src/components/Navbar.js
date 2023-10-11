import React from "react";
import logo from './assets/brand_logo.png'
import { Link, NavLink, useNavigate } from "react-router-dom";
import classes from './Navbar.module.css';
import {HiShoppingCart} from 'react-icons/hi';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import MediaQuery from 'react-responsive';
import { useMediaQuery } from 'react-responsive'
import {GiHamburgerMenu} from 'react-icons/gi';
import { useState } from "react";




const Navbar = ()=>{
  
    //navbar
    const [isNavExpanded,setIsNavExpanded] = useState(false);

    const navBarExpandHandler=()=>{
        setIsNavExpanded(!isNavExpanded);
    };
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
           
        <div className={classes.nav}>
            <nav>
            <Link to='/'><a><img src={logo} alt="Logo"/></a></Link>
            <button onClick={navBarExpandHandler} className={classes.icon}><GiHamburgerMenu /></button>
               { !isNavExpanded && <ul className={classes.list}>
                
                     <li>
                        <NavLink to='/home'   style={({ isActive }) => ({ 
                                color: isActive ? 'red' : 'black',
                                background: isActive ? 'white' : 'white',
                                textDecoration:'none',
                            })}>HOME
                         </NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop'  style={({ isActive }) => ({ 
                                color: isActive ? 'red' : 'black',
                                background: isActive ? 'white' : 'white',
                                textDecoration:'none'
                            })}>SHOP</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' style={({ isActive }) => ({ 
                                color: isActive ? 'red' : 'black',
                                background: isActive ? 'white' : 'white',
                                textDecoration:'none'
                            })}>ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'style={({ isActive }) => ({ 
                                color: isActive ? 'red' : 'black',
                                background: isActive ? 'white' : 'white',
                                textDecoration:'none'
                            })}>CONTACT</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/cart' style={({ isActive }) => ({ 
                                color: isActive ? 'red' : 'black',
                                background: isActive ? 'white' : 'white',
                                textDecoration:'none'
                            })}>{HiShoppingCart}</NavLink>
                        
                    </li>
                    
                </ul>}


                {!isLoggedIn && <button onClick={loginNavigateHandler}>Login</button>}
                {isLoggedIn && <button onClick={logoutHandler} >Logout</button>}
             
           
            { isNavExpanded && 
                <div className={classes.navigationmenu}>
                <ul>
                     <li>
                        <NavLink to='/home' style={({ isActive }) => ({ 
                            color: isActive ? 'red' : 'white',
                            textDecoration:'none'
                        })}>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop'  style={({ isActive }) => ({ 
                            color: isActive ? 'red' : 'white',
                            textDecoration:'none'
                        })}>SHOP</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'  style={({ isActive }) => ({ 
                            color: isActive ? 'red' : 'white',
                            textDecoration:'none'
                        })}>ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' style={({ isActive }) => ({ 
                            color: isActive ? 'red' : 'white',
                            textDecoration:'none'
                        })}>CONTACT</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/cart'style={({ isActive }) => ({ 
                            color: isActive ? 'red' : 'white',
                            textDecoration:'none'
                        })}>Cart{HiShoppingCart}</NavLink>
                        
                    </li>
                    
                </ul>
                </div>}
                </nav>
        </div>
       
    );
};

export default Navbar;