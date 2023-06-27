import React, { useContext } from 'react'
import noteContext from "../context/notes/NotesContext";
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    
  const context = useContext(noteContext);
  const { notes, addNote} = context;
  return (
    <>
    <AddNote/>
    <div className='row my-3'>
        <h2>Your Notes</h2>
        {notes.map((notes) => {
          return <NoteItem key={notes._id} note={notes}/>
        })}
      </div>
      </>
  )
}

export default Notes