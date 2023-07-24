import React from 'react';
import { useContext } from 'react'; // Use named import for useContext
import counterContext from '../context';

export default function Counter(props) {
  const ctx = useContext(counterContext);

  return (
    <div>
      <h2>Counter stuff:</h2>
      <h3>{ctx.state}</h3>
      <button onClick={() => ctx.dispatch({ type: "add", payload: null })}>
        Add!
      </button>
      <button onClick={() => ctx.dispatch({ type: "subtract", payload: null })}>
        Subtract!
      </button>
    </div>
  );
}
