import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'
export default function About() {
  const a = useContext(noteContext)
  return (
    <div>
<h1>My name is {a.name}and class is {a.class}</h1>


    </div>
  )
}
