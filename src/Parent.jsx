import React from "react";
import Child from "./Child";
import Child2 from "./Child2";

export default function Parent() {
  return (
    <div>
      Parent Component
      <Child />
      <Child2 />
    </div>
  );
}
