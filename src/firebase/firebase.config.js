// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdzclRVPyL3psieycm4Gdcql8f0KWZCjM",
  authDomain: "user-email-password-auth-65caf.firebaseapp.com",
  projectId: "user-email-password-auth-65caf",
  storageBucket: "user-email-password-auth-65caf.appspot.com",
  messagingSenderId: "45057019590",
  appId: "1:45057019590:web:2051993849dad9bed691c7"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;