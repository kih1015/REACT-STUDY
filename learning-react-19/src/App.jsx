import "./App.css";

function App() {
  const post = {
    title: "About React 19",
    author: "Yalco",
  };

  return (
    <>
      <h1>{post.title}</h1>
      <title>{post.title}</title>
      <meta name="author" content={post.author} />
    </>
  );
}

export default App;
