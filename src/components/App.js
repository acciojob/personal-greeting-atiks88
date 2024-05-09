
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {

  const [showResult, setShowResult] = useState(false);
  const [counter, setCounter] = useState('');

  const Greeting = (e) => {
    setCounter(e.target.value);
    setShowResult(true); 
  }

  return (
    <div id="main">
      <label>Enter your name:</label>
       <input type="text" onChange={Greeting}></input>
       {showResult && <p>Hello {counter}!</p>}
    </div>
  );
}

export default App
