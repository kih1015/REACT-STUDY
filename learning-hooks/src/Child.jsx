import React from "react";

function Child({ active }) {
  console.log("Child rendered");
  return <p>Child: {active ? "Active" : "Not active"}</p>;
}

export default Child;
