import React from 'react'
import './App.css';
import Login from "./Components/Login"
import SignUp from './Components/SignUp';
import Welcome from "./Components/Welcome.js"
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (

    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp/>}/>
      
    </Routes>

      <Welcome />
     <Login />
    
     </BrowserRouter>
    </div>
  );
}

export default App;
