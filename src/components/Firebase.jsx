// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8fSbzz6eSl0dRdvWEF5zoEQbwKMXJVnw",
  authDomain: "authentication-11c20.firebaseapp.com",
  projectId: "authentication-11c20",
  storageBucket: "authentication-11c20.firebasestorage.app",
  messagingSenderId: "532741550887",
  appId: "1:532741550887:web:5ec0241ae98fd4cd496f02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}