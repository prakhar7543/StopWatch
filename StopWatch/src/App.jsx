import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  let [second, setSecond] = useState(0);
  let [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setSecond((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  function formatTime(unit) {
    return unit < 10 ? `0${unit}` : unit;
  }

  let minute = Math.floor(second / 60);
  let remaingSecond = second % 60;

  let handleClick = () => {
    setRunning(!running);
  };

  let handleReset = () => {
    setRunning(false);
    setSecond(0);
  };

  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <span style={{ fontSize: "larger", fontWeight: "bold" }}>
        Time:
      </span> {formatTime(minute)}:{formatTime(remaingSecond)}
      <div>
        <button onClick={handleClick}>{running ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
