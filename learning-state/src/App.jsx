import "./App.css";
import { useState } from "react";

function App() {
  const [isPinned, setPinned] = useState(false);

  const togglePinned = () => {
    setPinned(!isPinned);
  };

  return (
    <>
      <button onClick={togglePinned}>{isPinned && "📌"} Pinn This!</button>
    </>
  );
}

export default App;
