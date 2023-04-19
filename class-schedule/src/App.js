import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from "./Components/Login"
import SignUp from './Components/SignUp';
import Welcome from "./Components/Welcome"

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
    <Route path="/login" element={<Login />} />
    <Route path="/schedule" element={<Schedule />} />
    <Route path="/notes" element={<Notes />} />
    <Route path="/schedule-spacing" element={<RowAndColumnSpacing />} />
    <Route path="/signup" element={<SignUp />} />
  </Routes>




     

  </div>
  );
}

export default App;
