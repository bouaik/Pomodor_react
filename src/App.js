import React, { useState, useRef } from 'react';
import './App.css';


// let interval = setInterval(() => { }, 1000)
// clearInterval(interval)

function App() {
  const [title, setTitle] = useState('let the countdown begin !!!')
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)

  let intervalRef = useRef(null)

  const startTimer = () => {
    if (intervalRef.current !== null) return
    setTitle(`you're doing great !`)
    setIsRunning(true)
    intervalRef.current = setInterval(() => {
      setTimeLeft(prevState => {
        if (prevState >= 1) return prevState - 1
        resetTimer()
        return 0
      })
    }, 1000)
  }

  const stopTimer = () => {
    if (intervalRef.current === null) return
    clearInterval(intervalRef.current)
    setTitle('keep it up !')
    setIsRunning(false)
  }

  const resetTimer = () => {
    clearInterval(intervalRef.current)
    setTitle('let the countdown begin !!!')
    setTimeLeft(25 * 60)
    setIsRunning(false)
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
        {!isRunning && <button onClick={startTimer}>start</button>}
        {isRunning && <button onClick={stopTimer}>stop</button>}
        <button onClick={resetTimer}>reset</button>
      </div>
    </div>
  );
}

export default App;
