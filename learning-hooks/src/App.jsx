import "./App.css";
import useCounter from "./hooks/useCounter";

const App = () => {
  const { count, increment, decrement } = useCounter(0);

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default App;
