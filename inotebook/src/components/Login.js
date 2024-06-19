import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom'; 

const Login=(props)=> {   
const [credential,setcredential]=useState({email:"",password:""});
let navigate=useNavigate();


const handlesubmit= async (e)=>{
e.preventDefault()
const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
   
    headers: {
      "Content-Type": "application/json"
     
 },
 body:JSON.stringify({email:credential.email,password:credential.password})

  });
  const json=await response.json();
  console.log(json)
  if(json.success){
    localStorage.setItem("token",json.authtoken)
    props.showalert(" Login successfully","success")
    navigate("/")
    
  }
  else{
    props.showalert(" Invaild credential","danger")
  }
}
const onchage=(e)=>{
    setcredential({...credential,[e.target.name]:e.target.value})
       }
  return (
    <div>
        <form onSubmit={handlesubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" onChange={onchage} className="form-control" id="email" value={credential.email} name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" onChange={onchage} className="form-control" value={credential.password} id="password" name='password' />
  </div>
  
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}


export default Login