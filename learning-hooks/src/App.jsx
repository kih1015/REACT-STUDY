import "./App.css";
import ClassComp from "./ClassComp";
import FuncComp from "./FuncComp";
import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState("");

  return (
    <>
      {["", "ClassComp", "FuncComp"].map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={selected === option}
            onChange={(e) => setSelected(e.target.value)}
          />
          {option || "None"}
        </label>
      ))}
      {selected && (selected === "ClassComp" ? <ClassComp /> : <FuncComp />)}
    </>
  );
};
export default App;
