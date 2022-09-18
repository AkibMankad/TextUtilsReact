import "./App.css";
import React, {useState} from 'react'
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#101434';
      showAlert("Dark Mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  const showAlert = (message,type)=> {
      setAlert({
        msg: message,
        type: type
      });

      setTimeout(() =>{
        setAlert(null);
      }, 1500);
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={
              <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
            } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
