import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import { ThemeMode } from "../../ThemeMode";

const RepoItem = (props) => {
  const { name, owner, html_url } = props.repo;
  const { darkMode } = useContext(ThemeMode);

  return (
    <div className="card text-center">
      <strong>{name}</strong>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={owner.avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
      </div>
      <div>
        <a
          href={html_url}
          className={`btn ${darkMode ? "" : "btn-dark"}btn-sm my-1`}
          target="_blank"
          rel="noopener noreferrer"
        >
          More
        </a>
      </div>
    </div>
  );
};

export default RepoItem;
