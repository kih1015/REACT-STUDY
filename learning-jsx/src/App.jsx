import "./App.css";

function App() {
  const hasMessages = true;
  const message = "Hello, World!";

  return (
    <>
      {hasMessages && <h2>You have new messages!</h2>}

      {message && <p>Message: {message}</p>}

      <p>Message: {message ?? <em>No message</em>}</p>
      <p>Message: {message || <em>Empty</em>}</p>
    </>
  );
}

export default App;
