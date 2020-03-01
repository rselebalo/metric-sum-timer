import React, { useState, useEffect } from 'react';
import './App.css';
import BeepSound from '../assets/audio/beep.mp3';
import CountdownTimer from '../components/Clock/clock';
import CountInput from '../components/ClockInput/clockInput';
import AdjustClockSpeed from '../components/ClockSpeedAdjuster/clockSpeedAdjuster';
import PauseResumeClock from '../components/ClockPauseResume/clockPauseResume';

const App = () => {
  const [count, setCount] = useState(0);
  const [initialTime, setInitialTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const audio = new Audio(BeepSound);

  useEffect(() => {
    const timer =
      count > 0 &&
      running &&
      !isPaused &&
      setInterval(() => setCount(count - 1), speed);
    return () => clearInterval(timer);
  }, [count, running, isPaused, speed]);

  useEffect(() => {
    if ((count === 0) & running) {
      audio.play();
    }
  }, [count, running, audio]);

  const handlePause = () => {
    setIsPaused(true);
    const timer = count > 0 && running;
    return () => clearInterval(timer);
  };

  const handleContinue = () => {
    setIsPaused(false);
    setRunning(true);
    setCount(count - 1);
  };

  const handleSetSpeed = speed => {
    setSpeed(speed);
  };
  const handleCountdown = minutes => {
    // convert minute to seconds
    setCount(minutes * 60);
    setInitialTime(minutes * 60);
    setRunning(true);
  };

  return (
    <div className="container">
      <CountInput onSetCountdown={handleCountdown} />
      {running && (
        <div className="clock-holder">
          <CountdownTimer time={count} initialTime={initialTime} />
          <PauseResumeClock
            count={count}
            running={running}
            isPaused={isPaused}
            handlePause={handlePause}
            handleContinue={handleContinue}
          />
        </div>
      )}

      <AdjustClockSpeed
        speed={speed}
        running={running}
        isPaused={isPaused}
        setSpeed={handleSetSpeed}
      />
    </div>
  );
};

export default App;
