import React, { useState } from "react";
import NoteContext from "./NotesContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "648a102eb27efee9ffbf1e1e",
      user: "64885c4122ad2c4504a2139e",
      title: "My Note 1",
      description: "This is the first note created to test the endpoint update",
      tag: "testing update",
      date: "2023-06-14T19:08:30.704Z",
      __v: 0,
    },
    {
      _id: "648a1100b27efee9ffbf1e20",
      user: "64885c4122ad2c4504a2139e",
      title: "My Note 2",
      description: "This is the second note created to test the endpoint",
      tag: "testing",
      date: "2023-06-14T19:12:00.293Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  
  // Add a Note
  const addNote = (notess) => {
    console.log("Adding note " + notess.title);
    //TODO: API call
    const note = {
        _id: "648a1100b27efee9ffbf1e2023",
        user: "64885c4122ad2c4504a2139e",
        title: notess.title,
        description: notess.description,
        tag: notess.tag,
        date: "2023-06-14T19:12:00.293Z",
        __v: 0,
      };
    setNotes(notes.concat(note));
  }

  // Delete a note
  const deleteNote = (id) => {
    console.log("Delete note", id);
    //TODO: API call
    const newNotes=notes.filter((note) =>{return note._id !== id});
    setNotes(newNotes);
  }

  // Edit a note
  const editNote = (id,title,description,tag) => {
    for (let index = 0; index < notes.length; index++) {
        const note = notes[index];
        if(note._id === id) {
            note.title = title;
            note.description = description;
            note.tag = tag;
        }
    }

    //TODO: API call
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children};
    </NoteContext.Provider>
  );
};

export default NoteState;
