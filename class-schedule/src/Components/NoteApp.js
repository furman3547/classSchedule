import React, { useEffect } from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NotesList from "./NotesList" 
import { nanoid } from 'nanoid';
import { useState } from "react";
import Search  from "./Search";
import Header from './Header';
// import Navigation from './components/Navigation';

const NoteApp = () => {
  const [notes,setNotes]=useState([
  //   {
  //   id: nanoid(),
  //   text:"This is my first note!",
  //   date:"03/22/2023"
  // },
  // {
  //   id: nanoid(),
  //   text:"This is my second note!",
  //   date:"03/24/2023"
  // },
  // {
  //   id: nanoid(),
  //   text:"This is my third note!",
  //   date:"03/29/2023"
  // },
  // {
  //   id: nanoid(),
  //   text:"This is my new note!",
  //   date:"03/30/2023"
  // },
]);
//API Fetch Request: 
const apiKey = 'live_ToCv3D75t3YmFp5rjnANy7yPFS4ZTO2911hutzlHjuXxxuu9E41yQ0AEwPo4vKm9';
const apiUrl = 'https://api.thecatapi.com/v1/images/search';

fetch(apiUrl, {
  headers: {
    'x-api-key': apiKey
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    setCatImageURL(data[0].url);
    
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });







const [searchText, setSearchText] = useState('');
const [darkMode, setDarkMode] = useState(false);
const [catImage, setCatImageURL] = useState("");


useEffect(()=>{
    localStorage.setItem(
      'react-notes-app-data', 
      JSON.stringify(notes)
      );
}, [notes]); //dependency variable []- the variable that updates prior to local storage save 

const addNote = (text)=> {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes,newNote];
  setNotes(newNotes);//updates with new data from notes
};

const deleteNote=(id)=> {
  const newNotes= notes.filter((note)=> note.id!==id);
  setNotes(newNotes);
}
  return(
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className='container'>
    
    {/* <Navigation /> */}
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search />
      <NotesList 
      notes={notes} 
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}/>
    
    {/* <img src={catImage} alt="Random Cat" width="500" height="500" /> */}
  
    </div>
    </div>
  );
};

export default NoteApp;