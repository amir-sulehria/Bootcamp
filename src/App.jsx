import React, { useReducer, useState } from "react";
import ValueContext from "./ValueContext";
import Parent from "./Parent";

export default function App() {
  let val = useState(97);
  return (
    <ValueContext.Provider value={val}>
      <div>
        Hello world
        <Parent />
      </div>
    </ValueContext.Provider>
  );
}
