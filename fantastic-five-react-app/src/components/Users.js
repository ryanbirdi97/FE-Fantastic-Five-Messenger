import { fetchUsers } from "../api.js";

function Users() {
  return (
    <div className="Users">
      {fetchUsers().then((users) => {
        // console.log(users);
      })}
    </div>
  );
}

export default Users;
