const express= require('express')

const router=express.Router()
const Notes=require('../models/Notes')
const fetchuser=require('../middleware/fetchuser')
const { body, validationResult } = require("express-validator");


//route1: get all notes using api/note/fetchallnotes  login required
router.get('/fetchallnotes',fetchuser,async(req,res)=>{

   try {
      const userid=req.user.id
      const notes= await Notes.find({userid})
      res.json(notes)
      
   } catch (error) {
      console.log(error.messsage);
      res.status(500).send( "Server error" );
   }
   
 
})


//route 2:add new notes using api/note/addnote

router.post('/addnote',fetchuser,[
   body("title", "Enter a valid title").isLength({ min: 3 }),
   body("description", "description must have a minimum of 5 characters").isLength({ min: 5}),

],async(req,res)=>{
   try {
      const {title,description,tag}=req.body
//if any errors
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
//add new notes
   const note=new Notes({
      title,description,tag,user:req.user.id
   })
const savedNotes= await note.save()
res.json(savedNotes)
   } 
   catch (error) {
      console.log(error.messsage);
      res.status(500).send( "Server error" );
      
   }
   

})


//route 3:update notes using api/note/updatenote

router.put('/updatenote/:id',fetchuser,async(req,res)=>{

   try {

      const {title,description,tag}=req.body
      //create new note object
   
      const newNote ={};
      if(title){newNote.title=title}
      if(description){newNote.description=description}
      if(tag){newNote.tag=tag}
   
      //find note to be updated and update it
   
      let note= await Notes.findById(req.params.id)
      if(!note){return res.status(404).send("not found")}
      if(note.user.toString()!==req.user.id){
         return res.status(401).send("not allowed")
      }
      note=await  Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
      res.json(note)
      
   } catch (error) {
        
      console.log(error.messsage);
      res.status(500).send( "Server error" );
   }
  
})


//route 4:delete notes using api/note/deletenote 

router.delete('/deletenote/:id',fetchuser,async(req,res)=>{
   // const {title,description,tag}=req.body
   //create new note object

   // const newNote ={};
   // if(title){newNote.title=title}
   // if(description){newNote.description=description}
   // if(tag){newNote.tag=tag}

   //find note to be deleted and delete it

   try {
      let note= await Notes.findById(req.params.id)
      if(!note){return res.status(404).send("not found")}
   
      //allow deletion only if user owns this note
      if(note.user.toString()!==req.user.id){
         return res.status(401).send("not allowed")
      }
      note=await  Notes.findByIdAndDelete(req.params.id)
      res.json({"Sucess":"Note has been deleted",note:note})
      
   } catch (error) {
      
      console.log(error.messsage);
      res.status(500).send( "Server error" );
   }
  
})
module.exports=router