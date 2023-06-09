import React from 'react'
import {useState} from 'react';

const AddNote =({handleAddNote})=>{
    const [noteText, setNoteText] = useState('');
    const characterLimit= 200;
    
    const handleChange=(event)=>{
        if(characterLimit - event.target.value.length >=0){ //validation for character count
        setNoteText(event.target.value);
        }
    };

//function to not allow empty space-built in .trim
    const handleSaveClick=()=>{
        if(noteText.trim().length > 0){ 
        handleAddNote(noteText);
        setNoteText('');//reseting note after submit
    }
    };

    return(<div className="note new">
        <textarea 
        rows="8" 
        cols="10" 
        placeholder="type to add a note..."
        value={noteText}
        onChange={handleChange}
        ></textarea>
        <div className= "note-footer">
            <small>{characterLimit - noteText.length} Remaining</small>
            <button className="save" onClick={handleSaveClick}>Save</button>
        </div>


    </div>
    );
};

export default AddNote;