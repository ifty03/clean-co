// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL-fokYIC2bSHaUrkLmtCk4i2j2SUFG-s",
  authDomain: "facebook-login-auth.firebaseapp.com",
  projectId: "facebook-login-auth",
  storageBucket: "facebook-login-auth.appspot.com",
  messagingSenderId: "1074669031380",
  appId: "1:1074669031380:web:5b45747be68e6daf545041",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
