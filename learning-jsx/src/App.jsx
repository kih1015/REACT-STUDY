import "./App.css";

function App() {
  const isLoggedIn = true;

  return (
    <>
      {<h1>JSX</h1>}

      {isLoggedIn ? <h1>Hello!</h1> : <h1>Sign in</h1>}

      {isLoggedIn ? (
        <>
          <h2>Welcome back!</h2>
          <p>You are logged in. Enjoy your time here!</p>
        </>
      ) : (
        <>
          <h2>Hello, Guest!</h2>
          <p>Please log in to access more features.</p>
        </>
      )}
    </>
  );
}

export default App;
