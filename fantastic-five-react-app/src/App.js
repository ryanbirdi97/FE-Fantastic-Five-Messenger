import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserLoginContext } from "./contexts/UserLogin";
import Home from "./components/Home.js";
import Users from "./components/Users.js";

function App() {
  const [userLogin, setUserLogin] = useState({
    username: "Manita",
    status: false,
    avatar:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  });

  return (
    <BrowserRouter>
      <UserLoginContext.Provider value={{ userLogin, setUserLogin }}>
        <div className="App">
          <Users />
          <header className="App-header"></header>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </UserLoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
