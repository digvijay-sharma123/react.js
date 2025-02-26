import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

export default function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter text to Analyze" />
      </div>

    </>
  );
}


