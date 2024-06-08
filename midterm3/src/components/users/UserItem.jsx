import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import { ThemeMode } from "../../ThemeMode";
const UserItem = (props) => {
  const { login, avatar_url } = props.user;
  const { darkMode } = useContext(ThemeMode);

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link
          to={`/user/${login}`}
          className={`btn  btn-sm my-1 ${darkMode ? "" : "btn-dark"}}`}
        >
          More
        </Link>
      </div>
    </div>
  );
};
export default UserItem;
