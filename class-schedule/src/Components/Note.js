import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { FaMicrophoneAlt } from "react-icons/fa";
import {BiMessageEdit} from "react-icons/bi"
const Note=({id, text, date, handleDeleteNote })=>{
return(
     <div className="note">
    <span>{text}</span>
    <div className="note-footer">
        <small>{date}</small>
        <BiMessageEdit className='edit-icon'size='1.3em'/>
        <FaMicrophoneAlt className='microphone-icon' size='1.3em'/>
        <MdDeleteForever onClick={()=> handleDeleteNote(id)}className='delete-icon' size='1.3em'/>
       
    </div>
</div>
);
};

export default Note;