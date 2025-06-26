import "./App.css";
import { useState } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(true);

  return (
    <>
      <h2>Parent</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setActive((a) => !a)}>Change Name</button>
      <p>Count: {count}</p>
      <Child active={active} />
    </>
  );
}

export default App;
