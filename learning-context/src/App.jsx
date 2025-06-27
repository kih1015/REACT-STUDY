import "./App.css";
import { useState } from "react";
import Child1 from "./Child1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>App</h2>
      <Child1 count={count} setCount={setCount} />
    </div>
  );
}

export default App;
