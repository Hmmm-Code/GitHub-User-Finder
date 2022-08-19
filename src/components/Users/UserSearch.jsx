import { useState, useContext } from "react";
import GithubContext from "../../Context/GitHub/GithubContext";
import AlertContext from "../../Context/Alerts/AlertContext";
import { searchUsers } from "../../Context/GitHub/GithubAction";
import { FaSearch } from "react-icons/fa";

const UserSearch = () => {
  const [text, setText] = useState("");

  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter Something", "error");
    } else {
      dispatch({ type: "SET_LOADING" });

      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });
      console.log(users);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 w-16 rounded-l-none   btn-lg"
              >
                <FaSearch className="icon-cog  " />
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            className="btn btn-ghost btn-lg"
            onClick={() => dispatch({ type: "CLEAR_USERS" })}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
