import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrease() {
    setCount(count + 1);
  }
  function handleDecrease() {
    setCount(count - 1);
  }
  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <span> {count} </span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}

export default Counter;
