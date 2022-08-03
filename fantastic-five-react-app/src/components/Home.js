import { useContext } from "react";
import { UserLoginContext } from "../contexts/UserLogin";
import { Link } from "react-router-dom";

export default function Home() {
  const { userLogin, setUserLogin } = useContext(UserLoginContext);
  console.log(userLogin);

  return (
    <div className="home">
      <h2>Welcome to Messenger App</h2>
      <p>You are logged in as {userLogin.username}</p>
      <img src={userLogin.avatar} alt="user avatar" />
      <Link to={"/users"}>Select user to chat with</Link>
    </div>
  );
}
