// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbhMJGkijqDtz5NEUdlJvdlxccMHGHboM",
  authDomain: "moha-milon-auth-c2a2d.firebaseapp.com",
  projectId: "moha-milon-auth-c2a2d",
  storageBucket: "moha-milon-auth-c2a2d.firebasestorage.app",
  messagingSenderId: "370801867197",
  appId: "1:370801867197:web:fa8ed599a03006ff577ad4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);