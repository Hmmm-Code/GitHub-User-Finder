import { useContext } from "react";
import GithubContext from "../../Context/GitHub/GithubContext";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);
  console.log(users);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.div} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;
