import React from "react";

const Counter = ({ number, increase, decrease }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;