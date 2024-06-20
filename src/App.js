import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/index.jsx";
import Signup from "./components/Signup/index.jsx";
import SignIn from "./components/SignIn/index.jsx";

function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      {user && <Route path="/" exact element={<Home />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<SignIn />} />
      <Route path="/" exact element={<Navigate replace to="/login" />} />
      {!user && <Route path="*" element={<Navigate replace to="/login" />} />}
    </Routes>
  );
}

export default App;
