import React, { useContext } from 'react'
import noteContext from "../context/notes/NotesContext";
import NoteItem from './NoteItem';

const Notes = () => {
    
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className='row my-3'>
        <h2>Your Notes</h2>
        {notes.map((notes) => {
          return <NoteItem note={notes}/>
        })}
      </div>
  )
}

export default Notes