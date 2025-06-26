import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrease = (setter) => {
    setter((prev) => prev + 1);
  };

  useEffect(() => {
    console.log(`C1: ${count1}, C2: ${count2}`);
  }, [count1]);

  return (
    <div>
      <h2>Count1: {count1}</h2>
      <button onClick={() => handleIncrease(setCount1)}>Count1++</button>

      <h2>Count2: {count2}</h2>
      <button onClick={() => handleIncrease(setCount2)}>Count2++</button>
    </div>
  );
};

export default App;
