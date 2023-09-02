import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useState } from "react";


const authSlice = createSlice({
    name : 'auth',
    initialState : { isLoggedIn : false},
    initialToken:'',
    reducers : {
        signup(state,action)
        {
            state.isLoggedIn=false;
        },
        login(state,action)
        {
            //storing auth token in local storage
            state.initialToken=action.payload.idToken;
            const expirationTime=action.payload.expiresIn;

            localStorage.setItem('token',state.initialToken);
            localStorage.setItem('expirationTime',expirationTime);

            state.isLoggedIn = true;
        },

        logout(state)
        {
            //deleting token when logging out
            localStorage.removeItem('token');
            localStorage.removeItem('expirationTime');
        
            state.isLoggedIn = false;
        },
        refresh(state,action){
            state.isLoggedIn=true;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;



// useEffect(()=>{
//     if(tokenData){
//         logoutTimer = setTimeout(authActions.logout , tokenData.duration);
//     }
// },[tokenData,logout]);

// //calculating logout timer
// const calculateRemainingTime = (expirationTime) => {
//     const currentTime = new Date().getTime();
//     const adjExpirationTime = new Date(expirationTime).getTime();//gives time in milliseconds
  
//     const remainingDuration = adjExpirationTime - currentTime;
  
//     return remainingDuration;
//   };
  
//   const retrieveStoredToken = () => {
//     const storedToken = localStorage.getItem('token');
//     const storedExpirationDate = localStorage.getItem('expirationTime');
  
//     const remainingTime = calculateRemainingTime(storedExpirationDate);
  
//     if(remainingTime <= 3600){
//         localStorage.removeItem('token');
//         localStorage.removeItem('expirationTime');
//         return null;
//     }
  
//     return {
//         token : storedToken,
//         duration : remainingTime
//     };
//   };