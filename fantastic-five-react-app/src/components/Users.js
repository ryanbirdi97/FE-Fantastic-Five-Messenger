import { fetchUsers } from "../api.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [user2, setUser2] = useState("");

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
    });
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/chatroom");
    console.log("second useeffect inside Users.js");
  }, [user2]);

  return (
    <div className="Users">
      {users.map((user) => {
        return (
          <>
            <h1> {user.username} </h1>
            <button
              onClick={(e) => {
                setUser2(user.username);
              }}
            >
              {" "}
              Select{" "}
            </button>
          </>
        );
      })}
    </div>
  );
}

export default Users;
