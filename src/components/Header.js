import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) =>store.user)

  const handelSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  return (
    <div className='absolute z-10 w-screen bg-gradient-to-b from-black flex justify-between' >
        <img className='w-44 px-2 ' 
        src="https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png"
        alt="logo" />
        {user && <div className='flex'>
          {/* <img className='w-12 h-12 mr-4 mt-10 rounded-full' src={user?.photoURL} alt="user-image" /> */}
          <button 
          className='bg-red-700 font-semibold text-white px-4  mt-10 mr-4  rounded-md '
          onClick={handelSignOut} >Sign out</button>
        </div>}
    </div>
    
  )
}

export default Header