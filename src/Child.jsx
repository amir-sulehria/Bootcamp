import React, { useContext } from "react";
import ValueContext from "./ValueContext";

export default function Child() {
  const value = useContext(ValueContext);
  console.log(value);
  return (
    <div>
      Child Component, value is {value[0]}
      <button
        onClick={() => {
          value[1](value[0] + 1);
        }}
      >
        Update Value
      </button>
    </div>
  );
}
