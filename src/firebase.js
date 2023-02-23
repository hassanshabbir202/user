// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNbjFFshuDWQLe7jLMHVKjzLwbplqO2co",
  authDomain: "authentication-fa416.firebaseapp.com",
  projectId: "authentication-fa416",
  storageBucket: "authentication-fa416.appspot.com",
  messagingSenderId: "620252165205",
  appId: "1:620252165205:web:110e5f71120010c0a490dc",
  measurementId: "G-HQKE6NFXD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authe = getAuth(app);