import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/NotesContext'

export const About = () => {
  const a = useContext(noteContext)
  return (
    <div>
        This is about {a.name} and he is in class {a.class}.
    </div>
  )
}
