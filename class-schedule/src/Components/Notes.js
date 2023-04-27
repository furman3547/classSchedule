import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Header from './HeaderNotes';
import Search from './SearchNotes';
import NotesList from './NotesList';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [catImage, setCatImageURL] = useState('');

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  useEffect(() => {
    const apiKey = 'live_ToCv3D75t3YmFp5rjnANy7yPFS4ZTO2911hutzlHjuXxxuu9E41yQ0AEwPo4vKm9';
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';

    fetch(apiUrl, {
      headers: {
        'x-api-key': apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCatImageURL(data[0].url);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search />
        <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />
        
      </div>
    </div>
  );
};

export default Notes;