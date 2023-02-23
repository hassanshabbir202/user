import React, { useState } from 'react'
import { signInWithEmailAndPassword   } from "firebase/auth";
import {authe} from "./firebase"

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false);


   const login = (event) => {
     event.preventDefault();

     signInWithEmailAndPassword (authe, email, password)
    .then((userCredential) => {
        alert("Created")
      // Signed in 
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      setError(true)
    });
   }

  return (
    <div>
      <form>
      <input type="email" placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br />
      <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br />
      <button onClick={login}>Login</button>
      {error && <span>Wrong Email and Password</span>}
      </form>
    </div>
  )
}

export default Login
