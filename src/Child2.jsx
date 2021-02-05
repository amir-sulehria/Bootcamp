import React, { useReducer } from "react";
import numberReducer from "./numberReducer";

export default function Child2() {
  let [state, dispatch] = useReducer(numberReducer, 52);

  return (
    <div>
      Child2 Component {state} <br />
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>
    </div>
  );
}
