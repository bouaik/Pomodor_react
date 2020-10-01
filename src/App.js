import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>pomodoro</h2>
      <div className='timer'>
        <span>00</span>
        <span>:</span>
        <span>00</span>
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
