import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LoginSuccess from '../LogInSuccess';
import Schedule from '../Schedule';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // state for handling error message
  const navigate = useNavigate();

  const navigateSignUp = () => {
    navigate('/SignUp');
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setIsAuthenticated(true);
      }).catch((error) => {
        console.log(error);
        setIsAuthenticated(false);
        setErrorMessage('Incorrect Email or Password');
      })
  }

  return (
    <div className='sign-in-contianer'>
      {isAuthenticated ? (
        <div>
          {/* <LoginSuccess /> */}
          <Schedule />
        </div>
      ) : (
        <form onSubmit={signIn}>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* display error message */}
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
