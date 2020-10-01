import React, { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('let the countdown begin !!!')
  const [timeLeft, setTimeLeft] = useState(25 * 60)

  const startTimer = () => {
    setInterval(() => {
      setTimeLeft(prevState => prevState - 1)
    }, 1000)
  }

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft - (minutes * 60)).toString().padStart(2, '0');

  return (
    <div className="App">
      <h2>{title}</h2>
      <div className='timer'>
        <span className='numbers'>{minutes}</span>
        <span>:</span>
        <span className='numbers'>{seconds}</span>
      </div>
      <div className='buttons'>
        <button onClick={startTimer}>start</button>
        <button>stop</button>
        <button>reset</button>
      </div>
    </div>
  );
}

export default App;
