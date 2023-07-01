import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/NotesContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote, getNotes,editNote } = context;
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('authToken')){
      getNotes();
    }
    else{
      navigate('/login');
    }
  }, []);

  const ref = useRef(null);
  const refclose=useRef(null);

  const [note,setNote]=useState({etitle: "",edescription:"",etag:"default"})

  const updateNote = (currnote) => {
    console.log("update clicked");
    ref.current.click();
    setNote({id:currnote._id,etitle:currnote.title,edescription:currnote.description,etag:currnote.etag});
  };

  const handleClick=(e) => {
    e.preventDefault();
    console.log("update note"+note);
    editNote(note.id,note.etitle,note.edescription,note.etag);
    refclose.current.click();
}

const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value});
}

  return (
    <>
      <AddNote />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                ref={refclose} 
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group my-3">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                    placeholder="Title"
                    onChange={onChange}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    placeholder="description"
                    onChange={onChange}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="description">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    placeholder="tag"
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={handleClick} type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((notes) => {
          return (
            <NoteItem key={notes._id} updateNote={updateNote} note={notes} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
