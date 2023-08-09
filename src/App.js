import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';

// import Alert from './components/Alert';

//react router 
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {


  const [mode, setMode] = useState('light'); // whether dark mode is enable or not
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type)=>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  // }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = '#042743';
      
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white';
      
    }
  }


  return (
   
    <>
  <Navbar title="harikesh" mode={mode} toggleMode = {toggleMode}/>

  {/* <Alert alert = {alert}/> */}

  <div className="container">
    {/* <Router>
  <Routes>
          <Route exact path="/about"
            element={<About/>} />
          
          
          <Route exact path="/"
         element ={ } /> */}
        
    {/* </Routes> */}

    <TextForm heading="Convert your text" mode={mode}/>

{/* <About/> */}
        {/* </Router> */}
</div>

    </>

  );
}

export default App;

