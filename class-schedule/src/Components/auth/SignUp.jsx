import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      navigate.push('/schedule');
    } catch (error) {
      console.log(error);
      setErrorMessage('Failed to create account');
    }
  };

  return (
    <div className='sign-up-container'>
      <form onSubmit={signUp}>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <h1>Create an Account</h1>
        <input type="email" placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="password" placeholder='Confirm your password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;