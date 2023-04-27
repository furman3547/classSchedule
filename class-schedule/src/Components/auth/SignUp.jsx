import React,{ useState } from 'react';
import { Route } from 'react-router-dom';
import { initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD2dSTcxw2xwvJtWmstT-tDAm12D1DhT68",
  authDomain: "login-2d5f5.firebaseapp.com",
  projectId: "login-2d5f5",
  storageBucket: "login-2d5f5.appspot.com",
  messagingSenderId: "1043045879044",
  appId: "1:1043045879044:web:1e92d3f42480bd82cd5451",
  measurementId: "G-RTF8496PQX"
  };
  
  const app = initializeApp(firebaseConfig);




const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const signUp = (e)=> {
  e.preventDefault();
    createUserWithEmailAndPassword(getAuth, email, password)
    .then((userCredential) => {
        console.log(userCredential)
    }) .catch (( error) => {
        console.log(error);
});
   

};
  return (
    <div className='sign-in-contianer'>
        <form onSubmit={signUp}>
            <h1>Create Account</h1>
            <input type="email" 
                placeholder='Enter your email' 
                value={email}
                onChange={(e) => setEmail (e.target.value)}
            ></input>
            <input type="password" 
                placeholder='Enter your password' 
                value={password}
                onChange={(e) => setPassword (e.target.value)}
                ></input>
            
            <button type="submit">Sign Up</button> 
            
                        
        
            
            
            </form>
    </div>
  )
}

export default SignUp;