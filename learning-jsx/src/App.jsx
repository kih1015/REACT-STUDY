import "./App.css";

function FunctionExpressions() {
  const getGreeting = (name) => `Hello, ${name}!`;

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + item.price, 0);
  };

  const items = [
    { id: 1, price: 10 },
    { id: 2, price: 20 },
  ];

  return (
    <div>
      <p>{getGreeting("Alice")}</p>
      <p>Today: {formatDate(new Date())}</p>
      <p>Total: ${calculateTotal(items)}</p>
      <p>
        Good{" "}
        {(() => {
          const hours = new Date().getHours();
          return hours < 12 ? "morning!" : "afternoon!";
        })()}
      </p>
    </div>
  );
}

function App() {
  return <FunctionExpressions />;
}

export default App;
