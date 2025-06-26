import "./App.css";

function getUserContent(userStatus) {
  return userStatus === "admin" ? (
    <div>
      <h2>Admin Dashboard</h2>
      <button>Manage Users</button>
    </div>
  ) : userStatus === "member" ? (
    <section>
      <h2>Member Home</h2>
      <p>Welcome to the community!</p>
    </section>
  ) : (
    <article>
      <h2>Guest Access</h2>
      <a href="/signup">Sign up here</a>
    </article>
  );
}

function App() {
  return <>{getUserContent("admin")}</>;
}

export default App;
