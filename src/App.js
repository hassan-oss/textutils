
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, {useState} from 'react'
import Alert from "./components/Alert";
import Aboutus from "./components/Aboutus";
import {
  BrowserRouter as Router,
  Routes,
  Route,

  
} from "react-router-dom";

function App() {
  const Tooglemode =()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor = 'navy';
      document.body.style.Color = 'white';
      Showalert("Dark mode enabled","Success")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor = 'white';
      document.body.style.Color = 'navy';
      Showalert("Light mode enabled","Success")
    }

  }
  const [mode, setmode] = useState("light");
  
  const Showalert =(Message,Type)=>{
    setalert({
      msg:Message,
      typ:Type
    })
    setTimeout(() => {
      setalert(null)
  }, 2000);
    
  }
  
  // At first we dont want show any alert so intial state is null.
  const [alert, setalert] = useState(null);


  

  return (
      <>
          
      <Router>
      <Navbar title="Textutils" aboutText="AboutUs" mode={mode} Tooglemode={Tooglemode} />
      
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/Aboutus" element={<Aboutus/>} />
          <Route exact path="/" element={<Textform Showalert={Showalert} heading="Text Box" mode={mode} />} />
        </Routes>
        
      </div>
    </Router>

      </>
  );
}
export default App;


