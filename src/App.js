import React, { useState } from 'react';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60)

  const minutes = Math.floor(timeLeft / 60);
  const seconds = (timeLeft - (minutes * 60)).toString().padStart(2, '0')

  return (
    <div className="App">
      <h2>pomodoro!</h2>
      <div className='timer'>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className='buttons'>
        <button>start</button>
        <button>stop</button>
        <button>reset</button>
      </div>
    </div>
  );
}

export default App;
