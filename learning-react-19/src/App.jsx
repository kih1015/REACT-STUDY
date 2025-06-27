import "./App.css";
import { useActionState } from "react";
import { rollDice } from "./asynctasks";

const App = () => {
  const [dice, submitAction, isPending] = useActionState(async () => {
    try {
      const result = await rollDice();
      return result;
    } catch (e) {
      return e;
    }
  }, 7);

  return (
    <form action={submitAction}>
      <button type="submit" disabled={isPending}>
        {isPending ? "Rolling..." : "Roll Dice"}
      </button>
      {dice instanceof Error && <p>Error: {dice.message}</p>}
      {!(dice instanceof Error) && !isPending && dice && (
        <p>Dice result: {dice}</p>
      )}
    </form>
  );
};

export default App;
