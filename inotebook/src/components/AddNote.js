import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote=(props)=> {
    const context=useContext(noteContext)
    const {addNote}=context
    const [note, setnote] = useState({title:"",description:"",tag:"default"})
    const handleclick=(e)=>{
        e.preventDefault()
      addNote(note.title,note.description,note.tag)
      setnote({title: "", description: "", tag: ""})
      props.showalert(" Added successfully","Success")
    }

    const onchage=(e)=>{
setnote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <h2>Add Note</h2>
        <div className="container my-3">
        <form className='my-3'>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" value={note.title} minLength={5} required 
    onChange={onchage}/>

  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onchage} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onchage} minLength={5} required/>
  </div>
  <button disabled={note.title.length<5||note.description.length<5} type="submit" className="btn btn-primary" onClick={handleclick}>Add Note</button>
</form>
        </div>
    </div>
  )
}

export default AddNote