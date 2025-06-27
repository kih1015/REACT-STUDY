import "./App.css";
import { useState, useTransition } from "react";
import { rollDice } from "./asynctasks";

const App = () => {
  const [dice, setDice] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleRoll = () => {
    setError(null);
    startTransition(async () => {
      try {
        const result = await rollDice();
        setDice(result);
      } catch (err) {
        setError(err.message);
      }
    });
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
