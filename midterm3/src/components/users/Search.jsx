// Search.js
import axios from "axios";
import { useEffect, useState } from "react";
import Users from "./Users";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { searchUsers } from "../../api";
const Search = () => {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);

const history = useHistory();
const location = useLocation();

useEffect(() => {
  const query = new URLSearchParams(location.search).get("q");
  if (query) {
    setText(query);
    const fetchUser = async () => {
      const userData = await searchUsers(query);
      setUsers(userData);
    };
    fetchUser();
  }
}, [location.search]);

  const clearUsers = () => {
    setUsers([]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      history.push(`?q=${text}`);
    }
  };
  const onChange = (e) => setText(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-success btn-block"
        />
      </form>
      {/*Adding Clear button */}
      {users.length > 0 && (
        <button className="btn btn-danger btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
      <Users users={users} />
    </div>
  );
};
export default Search;
