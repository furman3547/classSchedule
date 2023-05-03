import React from 'react'
import { Routes,Route } from 'react-router-dom';
import './App.css';

import SignIn from "./Components/auth/SignIn";
import Welcome from "./Components/Welcome";
import SignUp from "./Components/auth/SignUp";
import Home from './Components/Home';
import Schedule from './Components/Schedule';

import RowAndColumnSpacing from './Components/Schedule';
import ResponsiveAppBar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (

    <div>

  <ResponsiveAppBar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Home"element={<Home/>} />
    <Route path="/SignIn" element={<SignIn/>} />
    <Route path="/schedule" element={<Schedule />} />
    {/* <Route path="/Note" element={<Note />}/> */}
    <Route path="/schedule-spacing" element={<RowAndColumnSpacing />} />
    <Route path="/SignUp" element={<SignUp />}/>
  </Routes>




     

  </div>
  );
}

export default App;
