import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(Number(localStorage.getItem("count")));
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div className="main">
      <div className="container">
        <button className="increase" onClick={increment}>
          Increase +
        </button>
        <button className="decrease" onClick={decrement}>
          Decrease -
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
        <h1>{count}</h1>
      </div>
    </div>
  );
};

export default App;
