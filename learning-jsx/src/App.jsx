import "./App.css";

function ObjectArrayExpressions() {
  const user = {
    name: "Jane",
    email: "jane@example.com",
  };
  const colors = ["red", "blue", "green"];
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <p>
        User: {user.name} ({user.email})
      </p>
      <p>First color: {colors[0]}</p>
      <p>Color count: {colors.length}</p>

      <p>Doubleds: {numbers.map((n) => n * 2).join(", ")}</p>

      <p>Evens: {numbers.filter((n) => n % 2 === 0).join(", ")}</p>
    </div>
  );
}

function App() {
  return <ObjectArrayExpressions />;
}

export default App;
