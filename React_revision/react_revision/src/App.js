import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

export default function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
    setTimeout(()=>{
      setalert(null)
    },2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black'
      showalert("Dark Mode has been enabled","Success")
      // document.title = "TextUtils Dark Mode "
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showalert("Light Mode has been enabled","Success")
      // document.title = "TextUtils Light Mode "
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showalert} heading="Enter text to Analyze" mode={mode} toggleMode={toggleMode} />
      </div>
    </>
  );
}


