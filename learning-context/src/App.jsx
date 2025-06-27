import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const navigate = useNavigate();

  const navTo = (path) => {
    navigate(path);
  };

  return (
    <>
      <button onClick={() => navTo("/")}>Home</button>
      <button onClick={() => navTo("/about")}>About</button>
      <button onClick={() => navTo("/contact")}>Contact</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
