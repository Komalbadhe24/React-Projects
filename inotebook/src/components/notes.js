import React, { useContext, useEffect,useRef,useState} from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";


const Notes = (props) => {
 let navigate=useNavigate()
  const context = useContext(noteContext);
  const { notes, getNote,editNote } = context;
  useEffect(() => {
     if(localStorage.getItem('token')){
      console.log(localStorage.getItem('token'))
      getNote();
  }
   else{
    navigate("/Login")
  }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
const refclose=useRef(null)
  const ref=useRef(null)

  const [note, setnote] = useState({id:"",etitle:"",edescription:"",etag:"default"})
  const updatenote = (currentNote) => {
    ref.current.click()
    setnote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
   
  };

  const handleclick=(e)=>{
    console.log("updating note",note)
    editNote(note.id,note.etitle,note.edescription,note.etag)
    //e.preventDefault();
     refclose.current.click()
     props.showalert("Updated Successfully","Success")
  
  }

  const onchage=(e)=>{
setnote({...note,[e.target.name]:e.target.value})
  }
  return (
    <>
      <AddNote showalert={props.showalert} />
 <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
      
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel" 
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">

            <form className='my-3'>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} minLength={5} required 
    onChange={onchage}/>

  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onchage} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onchage} minLength={5} required/>
  </div>
 
</form>  
            </div>
            <div className="modal-footer">
              <button ref={refclose}
              disabled={note.etitle<5 || note.edescription<5}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={handleclick} type="button" className="btn btn-primary">
                Update Notes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes</h2>
     <div className="container">
     {notes.length === 0 &&'No notes to display'}
   
     </div>
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updatenote={updatenote} note={note} showalert={props.showalert}/>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
