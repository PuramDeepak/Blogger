// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth , GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG2ZMD6H766c0dZTLWAXWuZy9AstGukt4",
  authDomain: "blogproject-38fc4.firebaseapp.com",
  projectId: "blogproject-38fc4",
  storageBucket: "blogproject-38fc4.appspot.com",
  messagingSenderId: "469969840413",
  appId: "1:469969840413:web:c313a1595bfa12e1c919f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth((app))
export const provider = new GoogleAuthProvider();
