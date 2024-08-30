import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_LOGO } from '../utils/constants';

const Login = () => {

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const dataValidate = () =>{
        // console.log(email)
        // console.log(password)
        const message = validateData(email.current.value, password.current.value)
        // console.log(message)
        setErrorMessage(message)
        if(message) return;

        if(!signInform){
            // signup form
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name.current.value, 
                // photoURL: "https://avatars.githubusercontent.com/u/128720388?s=400&u=764481aaa8703a3bd3ea46f8abe212aa3c699c63&v=4"
              }).then(() => {
                // Profile updated!
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(
                    addUser({
                        uid:uid,
                        email:email,
                        displayName:displayName,
                        photoURL:photoURL
                    })
                );

                navigate("/browse")
              }).catch((error) => {
                // An error occurred
                setErrorMessage(error.message)
              });
           // console.log(user)
        })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " " + errorMessage)
            });

        }
        else
        {
            //signin form
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // console.log(user)
            navigate("/browse")
        })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " " + errorMessage)
            });
        }
    }
    

    const[errorMessage, setErrorMessage] = useState(null)
    const [signInform, setSignInForm] = useState(true)

    const toggleSignIn = () =>{
        setSignInForm(!signInform)
    }

  return (
    <div >
        <Header/>
        <div className='absolute'>
            <img src={BG_LOGO}
            alt="background" />
        </div>

        <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12  mx-auto right-0 left-0 bg-black my-52 p-10 rounded-md opacity-75'>
            <h1 className='text-white font-bold text-2xl px-2 mb-4'>{signInform? "Sign In": "Sign Up"}</h1>

            {!signInform && <input  ref = {name} type="text" placeholder='Username' className='px-2 mx-2 my-2 w-full rounded-sm bg-gray-300 outline-none py-1 ' />}
            <input 
            ref = {email} type="text" placeholder='Email Address' className='px-2 mx-2 my-2 w-full rounded-sm bg-gray-300 outline-none py-1 ' />
            <input
            ref = {password} type="password" placeholder='Password' className='px-2 mx-2 my-2 w-full rounded-sm bg-gray-300 outline-none py-1 ' />

            <p className='font-bold text-red-700 px-2'>{errorMessage}</p>

            <button onClick={dataValidate} className='bg-red-700 px-4 mx-2 my-4 w-full text-white font-bold rounded-sm py-1 hover:text-lg' >{signInform? "Sign In": "Sign Up"}</button>
            <p className='text-white px-2 cursor-pointer hover:font-semibold' onClick={toggleSignIn}>{signInform ? "New to Netflix? Sign up now" : "Already Registered? Sign in"}</p>
        </form>

    </div>
  )
}

export default Login