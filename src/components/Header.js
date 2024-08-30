import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) =>store.user)

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // const uid = user.uid;
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL:photoURL }))
            // navigate("/browse") // if user is logged in navigate to /browse;
            navigate("/browse")
            } else {
                // User is signed out
                dispatch(removeUser());
                // navigate("/") // if the user logs out navigate to home route
                navigate("/")
            }
        });
        return () => unsubscribe();
},[]);

  const handelSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  return (
    <div className='absolute z-10 w-screen bg-gradient-to-b from-black flex justify-between' >
        <img className='w-44 px-2 ' 
        src={LOGO}
        alt="logo" />
        {user && <div>
          {/* <img className='w-12 h-12 mr-4 mt-10 rounded-full' src={user?.photoURL} alt="user-image" /> */}
          <button 
          className='bg-red-700 font-semibold text-white px-4 mt-8 mr-4 py-1 rounded-md '
          onClick={handelSignOut} >Sign out</button>
        </div>}
    </div>
    
  )
}

export default Header