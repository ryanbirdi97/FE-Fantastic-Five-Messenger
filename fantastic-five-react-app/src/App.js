import Users from "./components/Users.js";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Chatroom from "./components/Chatroom.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/chatroom" element={<Chatroom />} />
        </Routes>
      </BrowserRouter>

      <header className="App-header"></header>
    </div>
  );
}

export default App;
