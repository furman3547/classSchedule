import React from 'react'
import SignIn from './auth/SignIn';

import Welcome from './Welcome';
import SignUp from './auth/SignUp';


const Home = () => {
  return (
    <div>
     
      <Welcome/>
       <SignIn/>
     

    </div>

  )
}

export default Home;