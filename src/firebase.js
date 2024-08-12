// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "arsalanestate-7853c.firebaseapp.com",
  projectId: "arsalanestate-7853c",
  storageBucket: "arsalanestate-7853c.appspot.com",
  messagingSenderId: "93373757946",
  appId: "1:93373757946:web:60d658a0b8b46163504c43"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);