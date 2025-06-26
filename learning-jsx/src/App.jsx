import "./App.css";

function App() {
  const divStyle = {
    backgroundColor: "lightblue",
    margin: "12px",
    padding: "20px",
    borderRadius: "8px",
  };

  return (
    <>
      <div style={divStyle}>DIV 1</div>

      <div
        style={{
          ...divStyle,
          color: "darkblue",
          fontWeight: "bold",
        }}
      >
        DIV 2
      </div>
    </>
  );
}

export default App;
