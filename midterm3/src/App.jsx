// App.js
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/layouts/Home";
import Navbar from "./components/layouts/Navbar";
import { ThemeMode } from "./ThemeMode";
import { useContext } from "react";
const App = () => {
  const { darkMode } = useContext(ThemeMode);
  return (
    <div
      className={`App ${darkMode ? "bg-dark" : ""}`}
      style={{ minHeight: "100vh" }}
    >
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
};
export default App;
