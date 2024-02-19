import React, {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import Textform from './Components/Textform.js';
import Alert from './Components/Alert.js';
import About from './Components/About.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },2000 );
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = '#7f6363';
      showAlert("Dark mode has been enabled", "Success");
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
    }
  };
  const setBlue = () => {
    document.body.style.backgroundColor = 'blue';
    showAlert("Blue mode has been enabled", "Success");
  };
  const setGrey = () => {
    document.body.style.backgroundColor = 'grey';
    showAlert("Grey mode has been enabled", "Success");
  };
  const setGreen = () => {
    document.body.style.backgroundColor = 'green';
    showAlert("Green mode has been enabled", "Success");
  };
  return (
    <>
      <Router>
      <Navbar title= "TextUtils" about="About Us"  mode = {mode} toggleMode={toggleMode} setBlue ={setBlue} setGrey ={setGrey} setGreen ={setGreen}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
          <Route exact path="/about" element={<About />}> 
            {/* <About /> */}
          </Route>
          <Route exact path="/" element = {<Textform heading = 'Enter the text to analyze' mode={mode} toggleMode={toggleMode} setBlue ={setBlue} setGrey ={setGrey} setGreen ={setGreen}/>}>
            </Route>
      </Routes>
      </div>
      </Router>
     

    </>
  );
}

export default App;
