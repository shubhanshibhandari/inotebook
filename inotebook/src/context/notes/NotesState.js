import React from "react";
import NoteContext from "./NotesContext";

const NoteState = (props) =>{
    const state ={
        "name": "Anick",
        "class": "12Sc"
    }
    return(
        <NoteContext.Provider value={state}>
            {props.children};
        </NoteContext.Provider>
    )
}

export default NoteState;