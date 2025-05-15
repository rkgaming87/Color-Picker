import React from "react";

export default function ChildCounter1({ count, increase, decrease, reset }) {

  return (
    <div>
      <p>ChildCounter 1</p>
      <h2 className="text-4xl">{count}</h2>
      <button className="border-1 p-2 m-3" onClick={increase}>Increment</button>
      <button className="border-1 p-2 m-3" onClick={decrease}>Decrement</button>
      <button className="border-1 p-2 m-3" onClick={reset}>Reset</button>
    </div>
  );
}
