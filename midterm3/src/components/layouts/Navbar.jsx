import { Link } from "react-router-dom";
import { ThemeMode } from "../../ThemeMode";
import { useContext , useState} from "react";
const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeMode);
  const [content, setContent] = useState("Light Mode");
  
  const handleCheckboxChange = () => {
    setDarkMode(!darkMode);
    setContent(!darkMode ? "Light Mode" : "Dark Mode");
  };

  return (
    <nav className="navbar bg-success">
      <h1>
        <i className="fab fa-github" /> GitHub Finder
      </h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <label htmlFor="checkbox" onClick={handleCheckboxChange}>
          {content}{" "}
        </label>
      </div>
    </nav>
  );
};
export default Navbar;
