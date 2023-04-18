import React from 'react'
import './App.css';
import Login from "./Components/Login"
// import Welcome from "./Components/Welcome.js"
import {Route, Routes} from 'react-router'
import Home from './Components/Home';
import Schedule from './Components/Schedule';
import ResponsiveAppBar from './Components/Navbar';
import Notes from './Components/Notes';
import RowAndColumnSpacing from './Components/Schedule';
import { Dndprovider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div>
  
      <ResponsiveAppBar/>
     <Routes>
     <Route path="/" element={<Login />} />
    <Route path="Home" element={<Home />} />
    <Route path="Schedule" element={<Schedule />} />
    <Route path="Notes" element={<Notes />} />
    <Route path="Schedule" element={<RowAndColumnSpacing />} />


  </Routes>
    </div>
  );
}

export default App;
