import React, { useState } from "react";
import NoteContext from "./NotesContext";

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "648a102eb27efee9ffbf1e1e",
          "user": "64885c4122ad2c4504a2139e",
          "title": "My Note 1",
          "description": "This is the first note created to test the endpoint update",
          "tag": "testing update",
          "date": "2023-06-14T19:08:30.704Z",
          "__v": 0
        },
        {
          "_id": "648a1100b27efee9ffbf1e20",
          "user": "64885c4122ad2c4504a2139e",
          "title": "My Note 2",
          "description": "This is the second note created to test the endpoint",
          "tag": "testing",
          "date": "2023-06-14T19:12:00.293Z",
          "__v": 0
        }
      ]
      const [notes,setNotes]= useState(notesInitial)
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children};
        </NoteContext.Provider>
    )
}

export default NoteState;