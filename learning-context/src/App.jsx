import "./App.css";
import { CountProvider } from "./contexts/CountContext";
import Child1 from "./Child1";

function App() {
  return (
    <CountProvider>
      <h2>App</h2>
      <Child1 />
    </CountProvider>
  );
}

export default App;
