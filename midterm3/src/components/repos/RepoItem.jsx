import { Link } from "react-router-dom/cjs/react-router-dom.min";

const RepoItem = (props) => {
  const { name, owner, html_url } = props.repo;
  return (
    <div className="card text-center">
      <strong>{name}</strong>
      <div style={{display: "flex", justifyContent: "center"}}>
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
          className="btn btn-dark btn-sm my-1"
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
