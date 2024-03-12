import React from 'react'
import {createSlice} from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState:{
        user:JSON.parse(sessionStorage.getItem("authUser")) ||{
            name:'',
            password:'',
            authUser:false
        }
    },
    reducers:{
        login(state,action){
            const userId = action.payload;
            const userValidation = /^[a-zA-Z0-9]{4,10}$/i.test(userId.name);
            const passwordValidation = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/i.test(userId.password);

            state.user = userId;
            if(!userValidation || !passwordValidation)
            {
                state.user.authUser = false;
            }
            else{
                state.user.authUser = true;
                const saveState  = JSON.stringify(userId);
                sessionStorage.setItem('authUser', saveState);
            }
        },
        logout(state){
            state.user={
                name:"",
                password:"",
                image:'',
                authUser:false,
            }
            sessionStorage.clear();
        }
    }
})

export const {login,logout} = loginSlice.actions;
export const loginReducer = loginSlice.reducer; 