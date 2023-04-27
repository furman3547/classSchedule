import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import SignIn from "./Components/auth/SignIn";
import Welcome from "./Components/Welcome";
import SignUp from "./Components/auth/SignUp";
import Home from './Components/Home';
import Schedule from './Components/Schedule';
import Notes from './Components/Notes';
import RowAndColumnSpacing from './Components/Schedule';
import ResponsiveAppBar from './Components/Navbar';


function App() {
  return (

    <div>

  <ResponsiveAppBar />
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/SignIn" element={<SignIn/>} />
    <Route path="/schedule" element={<Schedule />} />
    <Route path="/notes" element={<Notes />} />
    <Route path="/schedule-spacing" element={<RowAndColumnSpacing />} />
    <Route path="/SignUp" element={<SignUp />}/>
  </Routes>




     

  </div>
  );
}

export default App;
