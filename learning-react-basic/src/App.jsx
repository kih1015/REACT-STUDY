import Child from "./Child";
import { FunctionComp, ArrowFunctionComp, ClassComp } from "./Components";

function Hello() {
  return <h1>Hello</h1>;
}

function App() {
  return (
    <>
      <Hello />
      <h2>World</h2>
      <Child />
      <ClassComp />
      <FunctionComp />
      <ArrowFunctionComp />
    </>
  );
}

export default App;
