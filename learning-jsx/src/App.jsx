import "./App.css";

function App() {
  const element1 = <h2>Hello, world!</h2>;
  const element2 = (
    <ul>
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
  );

  console.log(element1);
  console.log(element2);

  return (
    <>
      {/* JSX Practices */}
      <h1>JSX</h1>

      {element1}
      {element2}
    </>
  );
}

export default App;
