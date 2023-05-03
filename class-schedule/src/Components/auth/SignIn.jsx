import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import LoginSuccess from '../LogInSuccess';
import Schedule from '../Schedule';
import SignUp from './SignUp';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const navigateSignUp = () => {
    navigate('/SignUp');
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  
    return unsubscribe;
  }, []);
  
  const signIn = async (e) => {
    e.preventDefault();

    try {
      await setPersistence(auth, browserSessionPersistence);
      await signInWithEmailAndPassword(auth, email, password);
      setErrorMessage('');
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
      setErrorMessage('Incorrect Email or Password');
    }
  }

  return (
    <div className='sign-in-contianer'>
      {isAuthenticated ? (
        <div>
          {/* <LoginSuccess /> */}
         <LoginSuccess/>
        </div>
      ) : (
        <form onSubmit={signIn}>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <h1>Log In to Your Account</h1>
          <input type="email" placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input type="password" placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button type="submit">Log In</button>
          <br></br>
          Need an Account?

          <button type="button" onClick={navigateSignUp}>Signup Here</button>
        </form>
      )}
    </div>
  )
}

export default SignIn;
