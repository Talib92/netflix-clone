import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import {  onAuthStateChanged } from "firebase/auth";

const Body = () => {

    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ]);

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // const uid = user.uid;
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL:photoURL }))
                // navigate("/browse") // if user is logged in navigate to /browse;
                } else {
                    // User is signed out
                    dispatch(removeUser());
                    // navigate("/") // if the user logs out navigate to home route
                }
            });
    },[])

  return (
    <>
    <div>
        <RouterProvider router = {appRouter}/>
    </div>
        {/* <Login/>
        <Browse/> */}
    </>
  )
}

export default Body