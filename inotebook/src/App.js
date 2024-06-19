import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
function App() {
  const [alert, setalert] = useState(null)
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  return (
    <>
      <NoteState>
        <Router>
          
        <Nav />
        <Alert alert={alert}/>
          <div className="container">
          <Routes>
            <Route path="/" element={<Home showalert={showalert} />}></Route>
            <Route exact path="/About" element={<About />}></Route>
            <Route exact path="/Login" element={<Login showalert={showalert} />}></Route>
            <Route exact path="/Signup" element={<Signup showalert={showalert} />}></Route>
          </Routes>
          </div>
          
        </Router>
      </NoteState>
    </>
  );
}

export default App;
