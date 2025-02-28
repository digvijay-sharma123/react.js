import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

export default function App() {
  const [mode, setmode] = useState('light')

  const toggleMode = ()=>{
      if(mode==='light'){
        setmode('dark');
        document.body.style.backgroundColor = 'black'
      }
      else{
       setmode('light')
       document.body.style.backgroundColor = 'white'
      }
  }
  return (
    <>
      <Navbar title="TextUtils" mode = {mode}  toggleMode = {toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter text to Analyze" mode = {mode}  toggleMode = {toggleMode}/>    
      </div>
    </>
  );
}


