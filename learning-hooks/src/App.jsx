import "./App.css";
import { useState, useMemo } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const heavyCalculation = (num) => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  const calculatedValue = useMemo(() => heavyCalculation(count2), [count2]);

  return (
    <>
      <p>Counter 1: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>+</button>
      <button onClick={() => setCount1(count1 - 1)}>-</button>
      <p>Counter 2: {calculatedValue}</p>
      <button onClick={() => setCount2(count2 + 1)}>+</button>
      <button onClick={() => setCount2(count2 - 1)}>-</button>
    </>
  );
}

export default App;
