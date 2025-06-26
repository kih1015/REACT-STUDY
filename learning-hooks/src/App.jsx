import "./App.css";
import useWindowSize from "./hooks/useWindowSize";

const App = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <h2>Window Size</h2>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </>
  );
};

export default App;
