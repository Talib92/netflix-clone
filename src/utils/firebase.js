// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD09AP-KUgKZ12EXv07O6IW9dI9pWqrqW4",
  authDomain: "netflix-clone-4da49.firebaseapp.com",
  projectId: "netflix-clone-4da49",
  storageBucket: "netflix-clone-4da49.appspot.com",
  messagingSenderId: "410140124432",
  appId: "1:410140124432:web:6e774f549f2d6751fd3195",
  measurementId: "G-5RPX65HXTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()