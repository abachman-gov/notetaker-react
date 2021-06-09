// this.state
// this.setState((prev, props) => {
//   return nextState
// })

import { useState, useEffect } from "react";

export const SpinnyThing = (props) => {
  const [counter, setCounter] = useState(0);
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTicks((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>{props.name}</h1>
      <p>This is the counter: {counter}</p>
      <p>This is the timer: {ticks}</p>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        + ADD
      </button>
    </>
  );
};
