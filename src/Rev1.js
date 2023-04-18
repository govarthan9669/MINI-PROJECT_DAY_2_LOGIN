import React, { useState, useEffect } from 'react';
import './App.css';
import  './Rev.css';
function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data.content))
      .catch(error => console.log(error));
  }, []);

 
  const getNewQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data.content))
      .catch(error => console.log(error));
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quote Machine</h1>
        <div class="box">
        <p>{quote}</p>
        </div>
        <br></br>
        <button class="button1" onClick={getNewQuote}>Quote 4 u</button>
      </header>
    </div>
  );
}

export default App;