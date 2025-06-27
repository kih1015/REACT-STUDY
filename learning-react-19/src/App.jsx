import "./App.css";
import { useState } from "react";
import { rollDice } from "./asynctasks";

const App = () => {
  const [dice, setDice] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const handleRoll = async () => {
    setIsPending(true);
    setError(null);
    try {
      const result = await rollDice();
      setDice(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div>
      <button onClick={handleRoll} disabled={isPending}>
        {isPending ? "Rolling..." : "Roll Dice"}
      </button>
      {error && <p>Error: {error}</p>}
      {!error && !isPending && dice && <p>Dice result: {dice}</p>}
    </div>
  );
};

export default App;
