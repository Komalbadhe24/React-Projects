import React,{useState} from "react";
import NoteContext from "./noteContext";



const NoteState=(props)=>{
  const host='http://localhost:5000';
    const noteInitial=[]
const [notes, setNotes] = useState(noteInitial)
//getallnotes

  const getNote =async ()=>{
    //api call
    const response = await fetch(`${host}/api/note/fetchallnotes`, {
        method: "GET",
       
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        
        }, 
      
      });
   const json=await response.json()
   console.log(json)
   setNotes(json)
}


    //addnote
    const addNote =async (title,description,tag)=>{
        //api call
        const response = await fetch(`${host}/api/note/addnote`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
           
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            
            }, 
            body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
          });
     const note= await response.json()
      
        setNotes(notes.concat(note))
    }

    // //deletenote

    const deleteNote=async (id)=>{
        //api call 
        const response = await fetch(`${host}/api/note/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              "auth-token":localStorage.getItem('token')
            }
          });
          const json = response.json(); 
        console.log(json)
        console.log("Deleting note with id " + id)
        const newNote=notes.filter((note)=>{
            return note._id!==id
        })
        setNotes(newNote)

    }



    // //edit note

    //fetch api

    
    const editNote= async (id,title,description,tag)=>{
        const response = await fetch(`${host}/api/note/updatenote/${id}`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
           
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            
            }, 
            body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
          });
         const json= await response.json(); // parses JSON response into native JavaScript objects
         console.log(json)
         let newNotes = JSON.parse(JSON.stringify(notes))
        //logic for edit on client side
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if(element._id===id){
                newNotes[index].title=title;
                newNotes[index].description=description;
                newNotes[index].tag=tag
                break;
            }
            
        }
        setNotes(newNotes);
}
return(
<NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNote}}>
{props.children}
</NoteContext.Provider>
    )

}

export default NoteState;