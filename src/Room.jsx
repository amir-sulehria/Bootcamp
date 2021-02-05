import React, { useState } from "react";
import "./Room.css";

export default function Room() {
  const [isLit, setLit] = useState(false);
  const [age, setAge] = useState(24);

  return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>
      This room is {isLit ? "lit" : "dark"}
      <br />
      Age: {age}
      <br />
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
      <button onClick={() => setLit(!isLit)}>Toggle Light</button>
    </div>
  );
}
